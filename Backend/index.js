import express from "express";
import cors from "cors";  
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import DbCon from "./libs/db.js";
import AuthRoutes from "./routes/Auth.routes.js";
import EventRoutes from "./routes/Event.routes.js"; // ✅ Import Events Router

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// ✅ Fix CORS to Allow Cookies
app.use(cors({
    origin: "http://localhost:5173", // ✅ React frontend URL
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

DbCon();

// ✅ Register Routes
app.use("/auth", AuthRoutes);
app.use("/events", EventRoutes); // ✅ Ensure this is present

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});