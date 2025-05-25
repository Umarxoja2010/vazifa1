import React, { useState, useEffect } from "react";
import "../styles/Login.css";

export default function AuthCard() {
  const [isSignInActive, setIsSignInActive] = useState(true);

  // Input qiymatlari
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // Komponent ishga tushganda localStorage dan ma'lumotni tekshirish
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      // Agar user mavjud bo'lsa, Sign In panelini ko'rsatish va maydonlarni to'ldirish
      setIsSignInActive(true);
      setEmail(storedUser.email);
      setPassword(storedUser.password);
    }
  }, []);

  // Panelni almashtirish
  const togglePanels = () => {
    setIsSignInActive((prev) => !prev);
    // Formani tozalash
    setEmail("");
    setPassword("");
    setUsername("");
  };

  // Formani yuborish
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignInActive) {
      // Sign In: localStorage dan ma'lumot olib tekshirish
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        alert("Successfully signed in!");
        console.log("SIGN IN SUCCESS:", { email, password });
      } else {
        alert("Invalid email or password.");
        console.log("SIGN IN FAILED");
      }
    } else {
      // Sign Up: localStorage ga saqlash
      const newUser = { email, username, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("Registration successful! You can now sign in.");
      console.log("SIGN UP DATA:", newUser);
      togglePanels(); // Sign Up dan keyin Sign In ga o'tish
    }
  };

  return (
    <div className="container">
      <div className="card">
        {/* Chap panel */}
        <div className={`left-panel ${isSignInActive ? "" : "order-2"}`}>
          <h2 className="title">{isSignInActive ? "Sign In" : "Sign Up"}</h2>
          <form className="form" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-group">
              <label className="label" htmlFor="email">
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Username faqat Sign Up da */}
            {!isSignInActive && (
              <div className="form-group">
                <label className="label" htmlFor="username">
                  USERNAME
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Choose a username"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            )}

            {/* Parol */}
            <div className="form-group">
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Eslab qolish va link faqat Sign In holatda */}
            {isSignInActive && (
              <div className="options">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox" />
                  Remember me
                </label>
                <a href="a" className="forgot-link">
                  Forgot your password?
                </a>
              </div>
            )}

            {/* Submit button */}
            <button type="submit" className="btn-primary">
              {isSignInActive ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
        {/* O'ng panel */}
        <div
          className={`right-panel ${isSignInActive ? "" : "order-1"}`}
          onClick={togglePanels}
        >
          <h2 className="right-title">
            {isSignInActive ? "Hello, Friend!" : "Welcome Back!"}
          </h2>
          <p className="right-text">
            {isSignInActive
              ? "Register with your personal details to start and all new features"
              : "To keep connected with us please login with your personal info"}
          </p>
          <button className="btn-secondary">
            {isSignInActive ? "SIGN UP" : "SIGN IN"}
          </button>
        </div>
      </div>
    </div>
  );
}
