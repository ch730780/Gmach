import mongoose from "mongoose";
// import { MONGO_URI } from "./config";
// export const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     process.exit(1);
//   }
// };

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI || "");
  console.log("MongoDB connected");
};
