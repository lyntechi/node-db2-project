const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
});

module.exports = router;
