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
          <h2 className="title">{isSignInActive ? "Kirish" : "Ro'yxatdan o'tish"}</h2>
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
                placeholder="emailingizni kiriting"
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
                  Ismingiz
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Ismingizni kiriting"
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
                Parol
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="parolingizni kiriting"
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
                  Meni eslab qol
                </label>
                <a href="/" className="forgot-link">
                Parolingiz esdan chiqdimi?
                </a>
              </div>
            )}

            {/* Submit button */}
            <button type="submit" className="btn-primary">
              {isSignInActive ? "Kirish" : "Ro'yxatdan o'tish"}
            </button>

          </form>
        </div>
        {/* O'ng panel */}
        <div
          className={`right-panel ${isSignInActive ? "" : "order-1"}`}
          onClick={togglePanels}
        >
          <h2 className="right-title">
            {isSignInActive ? "Salom,do'stim!" : "Qaytib kelganingizdan xursandmiz!"}
          </h2>
          <p className="right-text">
            {isSignInActive
              ? "Boshlash uchun shaxsiy ma'lumotlaringiz va barcha yangi xususiyatlar bilan ro'yxatdan o'ting"
              : "Biz bilan aloqada bo'lish uchun shaxsiy ma'lumotlaringiz bilan tizimga kiring"}
          </p>
          <button className="btn-secondary">
            {isSignInActive ? " Ro'yxatdan o'tish " : " Kirish"}
          </button>
        </div>
      </div>
    </div>
  );
}
