const express = require("express");
const { ObjectId } = require("mongodb");
const { getDb } = require("./mongodb");

const router = express.Router();

// GET /names
router.get("/", async (req, res) => {
  try {
    const db = getDb();
    const names = await db.collection("names").find().toArray();
    res.json(names);
  } catch (error) {
    console.error("Error retrieving names:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /names
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const db = getDb();
    const result = await db.collection("names").insertOne({ firstName, lastName });
    res.status(201).json(result.ops[0]);
  } catch (error) {
    console.error("Error creating name:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /names/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDb();
    const name = await db.collection("names").findOne({ _id: ObjectId(id) });
    if (!name) {
      return res.status(404).json({ error: "Name not found" });
    }
    res.json(name);
  } catch (error) {
    console.error("Error retrieving name:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT /names/:id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    const db = getDb();
    const result = await db.collection("names").updateOne(
      { _id: ObjectId(id) },
      { $set: { firstName, lastName } }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Name not found" });
    }
    res.json({ message: "Name updated successfully" });
  } catch (error) {
    console.error("Error updating name:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// DELETE /names/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDb();
    const result = await db.collection("names").deleteOne({ _id: ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Name not found" });
    }
    res.json({ message: "Name deleted successfully" });
  } catch (error) {
    console.error("Error deleting name:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
