import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import DbCon from "./libs/db.js";
import AuthRoutes from "./routes/Auth.routes.js";
import EventRoutes from "./routes/Event.routes.js";

// ✅ Load environment variables
dotenv.config();

// ✅ Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allows all origins

// ✅ JSON body parser & cookie handler
app.use(express.json());
app.use(cookieParser());

// ✅ Connect to MongoDB
DbCon();

// ✅ Route handlers
app.use("/auth", AuthRoutes);
app.use("/events", EventRoutes);

// ✅ Health check (optional)
app.get("/", (req, res) => {
  res.send("API running successfully ✅");
});

// ✅ Start Express Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
