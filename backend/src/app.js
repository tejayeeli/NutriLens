const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const analyzeRoutes = require("./routes/analyzeRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🚀 NutriLens Backend is Running!",
  });
});

app.use("/api/analyze", analyzeRoutes);
app.use("/api/feedback", feedbackRoutes);

module.exports = app;