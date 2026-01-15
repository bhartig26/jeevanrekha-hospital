import React, { useState } from "react";
import "../styles/login.css";
// import logo  from "../src/assets/logo.svg";
import { FaUser, FaLock, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="../src/assets/logo.svg" alt="Hospital Logo" className="logo" />

        <h2>Welcome Back</h2>
        <p className="subtitle">Login to your account</p>

        {/* USERNAME */}
        <div className="form-group">
          <label>Username</label>
          <div className="input-wrapper">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Enter your username"
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="form-group">
          <label>Password</label>
          <div className="input-wrapper">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <span
              className={`eye-icon ${showPassword ? "active" : ""}`}
              onClick={() => setShowPassword(!showPassword)}
            >
              <FaEye />
            </span>
          </div>
        </div>

        <button
          className="login-btn"
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>

        <p className="help-text">
          Having trouble logging in? Please contact the
          <span> administrator</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;
