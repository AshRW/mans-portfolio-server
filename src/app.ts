import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import dotenv from "dotenv";
import { errorHandler } from "./utils/errorHandler";
import loggerMiddleware from "./utils/logger";
import { connectDB } from "./config/db";

dotenv.config();

const app = express();

app.use(express.json());
app.use(loggerMiddleware);
app.use("/api", routes);
app.use(errorHandler);

connectDB();

// mongoose
//   .connect(process.env.MONGO_URI!)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

export default app;
