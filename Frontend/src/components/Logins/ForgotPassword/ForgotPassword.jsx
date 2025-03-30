import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);  // Track the step: 1 for OTP, 2 for New Password
  const navigate = useNavigate();

  // Handle OTP request
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/auth/request-password-reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        credentials: "include",
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        setMessage("OTP sent successfully! Please check your email.");
        setStep(2);  // Move to OTP verification step
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      setErrorMessage("Failed to connect to the server. Please try again.");
    }
  };

  // Handle OTP verification and reset password
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp, newPassword }),
        credentials: "include",
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        setMessage("Password reset successfully!");
        setStep(1); // Reset to initial step (email input)
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      setErrorMessage("Failed to connect to the server. Please try again.");
    }
  };

  return (
    <div className="forgot-password-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        <FaArrowLeft className="back-icon" /> Back
      </button>

      <h2>Forgot Password</h2>
      {/* Step 1: Request OTP */}
      {step === 1 && (
        <form onSubmit={handleResetPassword}>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Request OTP"}
          </button>
        </form>
      )}

      {/* Step 2: Enter OTP and New Password */}
      {step === 2 && (
        <form onSubmit={handleVerifyOtp}>
          <label>OTP</label>
          <input 
            type="text" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)} 
            required 
          />
          
          <label>New Password</label>
          <input 
            type="password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
            required 
          />
          
          <button type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      )}

      {message && <p style={{ color: "green" }}>{message}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      
      <p>
        Remembered your password? <a href="/signin">Sign in here</a>
      </p>
    </div>
  );
};

export default ForgotPassword;