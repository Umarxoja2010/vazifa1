import React from "react";
import "../styles/Register.css";
import rasm1 from "../images/altronlogin.jpg"
export default function ColobeLogin() {
  return (
    <div className="container">
      <div className="login-wrapper">
        {/* Left side */}
        <div className="form-section">
          <h1 className="form-title"> Kirish</h1>
          <p className="form-subtitle">Hisobingizga kirish uchun tizimga kiring</p>
          <form className="form">
            <div>
              <input
                type="email"
                placeholder="john.doe@gmail.com"
                required
                className="input"
              />
            </div>
            <div className="input-password-wrapper">
              <input
                type="password"
                placeholder="••••••••••••••••"
                required
                className="input password"
              />
              <button
                type="button"
                aria-label="Toggle password visibility"
                className="password-toggle"
                tabIndex={-1}
              >
                <i className="fas fa-eye"></i>
              </button>
            </div>
            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox" />
                Kirish ma’lumotlarini saqlash
              </label>
              <a href="/apiregister903248756894934250" className="forgot-link">Parolni unutdingizmi</a>
            </div>
            <button type="submit" className="login-button">Kirish</button>
          </form>
          <p className="signup-text">
          Hisobingiz mavjud emasmi?
            <a href="/apiregister903248756894934250" className="signup-link">Kirish</a>
          </p>
          <p className="login-alt-text">Yoki quyidagi xizmatlar orqali kirish</p>
          <div className="social-buttons">
            <button aria-label="Login with Facebook" className="social-button facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button aria-label="Login with Google" className="social-button google">
              <i className="fab fa-google"></i>
            </button>
            <button aria-label="Login with Apple" className="social-button apple">
              <i className="fab fa-apple"></i>
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="image-section">
          <img
            src={rasm1}
            alt="Poolside hotel with palm trees, sun loungers, white umbrellas, and a wooden deck under a cloudy sky"
            className="login-image"
            width="600"
            height="700"
          />
        </div>
      </div>
    </div>
  );
}
