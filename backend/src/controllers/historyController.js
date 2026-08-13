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

module.exports = {
  getHistory,
};