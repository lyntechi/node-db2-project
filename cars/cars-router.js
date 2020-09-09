const express = require("express");
const router = express.Router();
const db = require("../data/config");

router.get("/", async (req, res, next) => {
  try {
    res.json(await db("cars"));
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const car = await db("cars").where(`${id}`).first();
    res.json(car);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const id = await db("cars").insert(req.body);
    const newCar = await db("cars").where(`${id}`).first();
    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
