import express from "express";
import { Register, VerifyEmail, Signin, getUser } from "../controllers/Auth.js";
import { authenticateUser } from "../middlewares/AuthMiddleware.js";
import { verifyStudent } from "../controllers/Auth.js";
import { getStudents } from "../controllers/Auth.js";
import { unverifyStudent } from "../controllers/Auth.js";
import { getStudentByEmail } from "../controllers/Auth.js";
import { getStudentByIdentifier } from "../controllers/Auth.js";
import { requestPasswordReset, resetPassword } from "../controllers/Auth.js"; // Import the new methods
const AuthRoutes = express.Router();

AuthRoutes.post("/register", Register);
AuthRoutes.post("/verifyEmail", VerifyEmail);
AuthRoutes.post("/signin", Signin);
AuthRoutes.get("/user", authenticateUser, getUser);
AuthRoutes.put("/verify-student/:id", authenticateUser, verifyStudent);
AuthRoutes.get("/students", authenticateUser, getStudents);
AuthRoutes.put("/unverify-student/:id", authenticateUser, unverifyStudent);
AuthRoutes.get("/student/email/:email", authenticateUser, getStudentByEmail);
AuthRoutes.get("/student/:identifier", authenticateUser, getStudentByIdentifier);
AuthRoutes.post("/request-password-reset", requestPasswordReset); // Route for requesting password reset (OTP)
AuthRoutes.post("/reset-password", resetPassword); // Route for resetting password with OTP

export default AuthRoutes;