const express = require("express");

const historyController = require("../controllers/historyController");

const router = express.Router();

router.get("/", historyController.getHistory);

router.get(
  "/:id/image",
  historyController.getHistoryImage
);

module.exports = router;