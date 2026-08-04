const express = require("express");

const analyzeController = require("../controllers/analyzeController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  analyzeController.analyzeImage
);

module.exports = router;