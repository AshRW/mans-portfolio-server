import express, { Application } from "express";
import dotenv from "dotenv";
import dummyRouter from "./routes/dummy.routes";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Routes
app.use("/api/data", dummyRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
