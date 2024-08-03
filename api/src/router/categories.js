const express = require("express");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  img: String,
});

const Category = mongoose.model("Category", schema);
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const category = await Category.find().lean();
    return res.json(category);
  } catch (err) {
    console.log(err);
    return res.send(500).json({ error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    return res.send(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});
router.post("/add", async (req, res) => {
  try {
    const category = new Category({
      name: req.body.name,
      img: req.body.img,
    });
    await category.save();
    res.send(category);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatecategory = await Category.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      img: req.body.img,
    });
    await updatecategory.save();
    return res.send(updatecategory);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletecategory = await Category.findByIdAndDelete(req.params.id);
    return res.send(deletecategory);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
