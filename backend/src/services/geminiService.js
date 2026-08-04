const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function analyzeMeal(imageBuffer, mimeType) {
  const imagePart = {
    inlineData: {
      data: imageBuffer.toString("base64"),
      mimeType,
    },
  };

  const prompt = `
You are NutriLens AI, an expert nutritionist and food recognition assistant.

Analyze the uploaded food image.

Rules:

- Ignore the image filename completely.
- Analyze ONLY the food visible in the image.
- If multiple foods are present, analyze the entire meal.
- Estimate realistic serving sizes.
- Estimate nutrition based on the visible portion.
- If the image is slightly blurry, make your best reasonable estimate.
- Never return explanations.
- Never return Markdown.
- Return ONLY valid JSON.

For "mealName", return ONLY the common name of the meal.

Examples:

Pizza

Veg Biryani

Chicken Fried Rice

Double Cheeseburger

Masala Dosa

Do NOT include ingredients in mealName.

Health insights must be concise (maximum 8 words).

Suggestions must be actionable (maximum 10 words).

Return exactly this structure:

{
  "mealName": "",

  "score": 0,

  "meal": [
    {
      "name": "",
      "estimatedServing": ""
    }
  ],

  "nutrients": [
    {
      "name": "Calories",
      "value": "",
      "percentage": 0
    },
    {
      "name": "Protein",
      "value": "",
      "percentage": 0
    },
    {
      "name": "Carbs",
      "value": "",
      "percentage": 0
    },
    {
      "name": "Fats",
      "value": "",
      "percentage": 0
    }
  ],

  "healthInsights": [
    "",
    "",
    ""
  ],

  "suggestions": [
    "",
    "",
    ""
  ]
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: [
      {
        role: "user",
        parts: [
          { text: prompt }, imagePart,
        ],
      },
    ],
  });

  const cleanedText = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  let parsed;

  try {
    parsed = JSON.parse(cleanedText);
  } catch (error) {
    console.error("Failed to parse Gemini JSON:");
    console.log(cleanedText);

    throw new Error("Gemini returned invalid JSON.");
  }

  return {
    mealName: parsed.mealName ?? "Unknown Meal",

    score: parsed.score ?? 0,

    meal: parsed.meal ?? [],

    nutrients: parsed.nutrients ?? [],

    healthInsights: parsed.healthInsights ?? [],

    suggestions: parsed.suggestions ?? [],
  };
}

module.exports = {
  analyzeMeal,
};