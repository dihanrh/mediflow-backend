import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString);

let db;

async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db("mediflowDatabase");
    console.log("Connected to database");
  } catch (error) {
    console.error("DB connection error", error);
    throw error;
  }
}

function getDB() {
  if (!db) {
    throw new Error("Database not initialized. Call connectToDatabase first.");
  }
  return db;
}

export { connectToDatabase, getDB };
