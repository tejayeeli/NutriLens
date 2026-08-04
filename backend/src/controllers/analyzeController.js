const { analyzeMeal } = require("../services/geminiService");

async function analyzeImage(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a food image.",
      });
    }

    const nutrition = await analyzeMeal(
      req.file.buffer,
      req.file.mimetype
    );

    console.log("\n========== GEMINI RESPONSE ==========");
    console.log(nutrition);
    console.log("=====================================\n");

    return res.status(200).json({
      success: true,
      ...nutrition,
    });

  } catch (error) {

    console.error("\n========== GEMINI ERROR ==========");
    console.error(error);
    console.error("==================================\n");

    if (
      error.status === 429 ||
      error.message?.includes("RESOURCE_EXHAUSTED") ||
      error.message?.includes("Quota exceeded")
    ) {
      return res.status(429).json({
        success: false,
        message: "Daily Analysis limit reached. Please try again later.",
      });
    }

    if (error.status === 400) {
      return res.status(400).json({
        success: false,
        message: "Invalid image uploaded.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong while analyzing your meal.",
    });
  }
}

module.exports = {
  analyzeImage,
};