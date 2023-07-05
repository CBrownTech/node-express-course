const { MongoClient } = require("mongodb");

const uri = "mongodb+srv:";
const client = new MongoClient(uri);

let _db = null;

async function connectToDatabase() {
    try {
      const uri = "mongodb+srv:";
      const client = new MongoClient(uri);
      await client.connect();
      db = client.db("task-manager"); // Replace "names" with your actual database name
      console.log("Connected to the database");
    } catch (error) {
      console.error("Error connecting to the database:", error);
      process.exit(1);
    }
  }

  function getDb() {
    if (!db) {
      throw new Error("Database not connected");
    }
    return db;
  }

module.exports = {
  connectToDatabase,
  getDb,
};
