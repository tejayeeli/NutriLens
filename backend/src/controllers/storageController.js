const Meal = require("../models/Meal");

async function getStorageStats(req, res) {
  try {
    const result = await Meal.aggregate([
      {
        $group: {
          _id: null,
          totalBytes: { $sum: "$imageSize" },
          imageCount: { $sum: 1 },
        },
      },
    ]);

    const totalBytes = result[0]?.totalBytes || 0;
    const imageCount = result[0]?.imageCount || 0;

    const totalMB = totalBytes / (1024 * 1024);
    const limitMB = 512;
    const usagePercentage = (totalMB / limitMB) * 100;

    return res.status(200).json({
      success: true,
      imageCount,
      totalBytes,
      totalMB: Number(totalMB.toFixed(2)),
      limitMB,
      usagePercentage: Number(usagePercentage.toFixed(2)),
    });

  } catch (error) {
    console.error("Storage stats error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to retrieve storage statistics.",
    });
  }
}

module.exports = {
  getStorageStats,
};