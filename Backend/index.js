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

// ✅ Allowed frontend origins
const allowedOrigins = [
  process.env.FRONTEND_URL,         // e.g., https://pvpsit-events.vercel.app
  "http://localhost:5173"           // for local development
];

// ✅ CORS Middleware — Allow Frontend Access + Cookies
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// ✅ Parse JSON & Cookies
app.use(express.json());
app.use(cookieParser());

// ✅ Connect to Database
DbCon();

// ✅ Register Routes
app.use("/auth", AuthRoutes);
app.use("/events", EventRoutes);

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
