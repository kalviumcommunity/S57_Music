import mongoose from "mongoose";

export async function Mongoose() {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (!db) {
      console.log("Couldn't connect to Mongoose");
      return process.exit(1);
    }
    console.log("Connected to Mongoose");
  } catch (err) {
    console.log(err);
  }
}
