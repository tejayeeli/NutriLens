const { analyzeMeal } = require("../services/geminiService");
const Meal = require("../models/Meal");
const sharp = require("sharp");

async function analyzeImage(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a food image.",
      });
    }

    // Compress image before sending to Gemini and MongoDB
    const compressedImage = await sharp(req.file.buffer)
      .resize({
        width: 1200,
        height: 1200,
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({
        quality: 75,
      })
      .toBuffer();

    // 1. Analyze image with Gemini
    const nutrition = await analyzeMeal(
      compressedImage,
      "image/jpeg"
    );

    console.log("\n========== GEMINI RESPONSE ==========");
    console.log(nutrition);
    console.log("=====================================\n");

    // 2. Save compressed image + analysis to MongoDB
    const meal = await Meal.create({
      image: compressedImage,
      imageMimeType: "image/jpeg",
      imageSize: compressedImage.length,

      mealName: nutrition.mealName,
      score: nutrition.score,

      meal: nutrition.meal,
      nutrients: nutrition.nutrients,

      healthInsights: nutrition.healthInsights,
      suggestions: nutrition.suggestions,

      trainingConsent: req.body.trainingConsent === "true",
    });

    console.log("✅ Meal saved to MongoDB:", meal._id);

    // 3. Return analysis
    return res.status(200).json({
      success: true,
      ...nutrition,
    });

  } catch (error) {
    console.error("\n========== ANALYZE ERROR ==========");
    console.error(error);
    console.error("==================================\n");

    // Gemini quota/rate limit
    if (
      error.status === 429 ||
      error.message?.includes("RESOURCE_EXHAUSTED") ||
      error.message?.includes("Quota exceeded")
    ) {
      return res.status(429).json({
        success: false,
        message:
          "Daily Analysis limit reached. Please try again later.",
      });
    }

    // Gemini temporarily unavailable
    if (
      error.status === 503 ||
      error.message?.includes("UNAVAILABLE") ||
      error.message?.includes("high demand")
    ) {
      return res.status(503).json({
        success: false,
        message:
          "Plateora's AI service is temporarily busy. Please try again in a few minutes.",
      });
    }

    // Invalid image/request
    if (error.status === 400) {
      return res.status(400).json({
        success: false,
        message: "Invalid image uploaded.",
      });
    }

    // Unknown server error
    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while analyzing your meal.",
    });
  }
}

module.exports = {
  analyzeImage,
};
