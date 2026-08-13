const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
  {
    image: {
      type: Buffer,
      required: true,
    },

    imageMimeType: {
      type: String,
      required: true,
    },

    imageSize: {
      type: Number,
      required: true,
    },

    mealName: {
      type: String,
      required: true,
    },

    score: {
      type: Number,
      required: true,
    },

    meal: [
      {
        name: String,
        estimatedServing: String,
      },
    ],

    nutrients: [
      {
        name: String,
        value: String,
        percentage: Number,
      },
    ],

    healthInsights: [String],

    suggestions: [String],

    trainingConsent: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Meal", mealSchema);