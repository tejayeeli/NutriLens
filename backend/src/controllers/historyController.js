const Meal = require("../models/Meal");

async function getHistory(req, res) {
  try {
    const meals = await Meal.find(
      {},
      {
        image: 0,
      }
    )
      .sort({ createdAt: -1 })
      .limit(50);

    return res.status(200).json({
      success: true,
      meals,
    });
  } catch (error) {
    console.error("History error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve meal history.",
    });
  }
}

async function getHistoryImage(req, res) {
  try {
    const meal = await Meal.findById(req.params.id);

    if (!meal) {
      return res.status(404).json({
        success: false,
        message: "Meal not found.",
      });
    }

    res.set("Content-Type", meal.imageMimeType);

    return res.send(meal.image);
  } catch (error) {
    console.error("History image error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve meal image.",
    });
  }
}

module.exports = {
  getHistory,
  getHistoryImage,
};