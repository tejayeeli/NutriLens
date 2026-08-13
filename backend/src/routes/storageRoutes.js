const express = require("express");

const storageController = require("../controllers/storageController");

const router = express.Router();

router.get("/", storageController.getStorageStats);

module.exports = router;