# 🥗 Plateora

> AI-powered meal analysis from a single image.

Plateora helps users understand their meals by analyzing a food image with AI and providing nutritional information, health insights, personalized suggestions, and an overall nutrition score.

🔗 **Live Demo:** https://plateora-theta.vercel.app/

---

## ✨ Features

- 📸 Upload meal images from gallery or camera
- 🤖 AI-powered food recognition and analysis
- 📊 Nutritional information
- 🟢 Overall meal health score
- 💡 Health insights and suggestions
- 📜 Persistent meal history
- 🖼️ Compressed meal image storage
- 🔐 Optional consent for future AI model improvement
- 📱 Responsive desktop and mobile interface

## 🚀 Future Updates

Plateora is actively evolving. The current version focuses on building a reliable foundation for AI-powered meal analysis.

### 🧠 Proprietary AI Model
Collect consented meal images and analysis data to build and train Plateora's own food recognition and nutrition model, reducing reliance on third-party AI services.

### 🎯 Improved Nutrition Accuracy
Improve food recognition, portion estimation, nutrient estimation, and overall meal scoring using real-world data.

### 📊 Personalized Nutrition Intelligence
Use a user's meal history to identify eating patterns and provide more personalized recommendations over time.

### ⚡ Smarter Meal Analysis
Move beyond basic food recognition toward deeper insights such as meal balance, nutrient gaps, and healthier alternatives.

### 📱 Continued Product Improvements
Improve the mobile experience, performance, reliability, and overall user experience based on real user feedback.
---

## 🛠️ Tech Stack

### Frontend

- React
- React Router
- Vite
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Sharp

### AI

- Google Gemini API

### Deployment

- Vercel
- Render
- MongoDB Atlas

---

## 🔄 How It Works

```text
User
 │
 │ Upload meal image
 ▼
React Frontend
 │
 │ POST /api/analyze
 ▼
Express Backend
 │
 ├──────────────► Google Gemini
 │                    │
 │                    ▼
 │               Meal Analysis
 │
 ▼
MongoDB
 │
 ├── Meal information
 ├── Nutrition data
 ├── Health insights
 ├── Suggestions
 ├── Compressed image
 └── Training consent
 │
 ▼
Meal History
