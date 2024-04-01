import mongoose from "mongoose";

export async function Connect() {
  const mongoURI = process.env.MONGODBURI;
  
  if (!mongoURI) {
    throw new Error("MONGOURI environment variable is not defined.");
  }

  try {
    await mongoose.connect(mongoURI ,{authSource : "admin"});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}