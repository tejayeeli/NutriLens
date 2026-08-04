const Feedback = require("../models/Feedback");

async function submitFeedback(req, res) {
  try {
    const { rating, feedback } = req.body;

    if (!rating || !feedback) {
      return res.status(400).json({
        success: false,
        message: "Rating and feedback are required.",
      });
    }

    const newFeedback = await Feedback.create({
      rating,
      feedback,
    });

    return res.status(201).json({
      success: true,
      message: "Thank you for your feedback!",
      feedback: newFeedback,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit feedback.",
    });
  }
}

module.exports = {
  submitFeedback,
};