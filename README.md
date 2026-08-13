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
