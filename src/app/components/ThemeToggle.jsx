
"use client";
import { useState, useEffect } from "react";
import styles from "./ThemeToggle.module.css"; 

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className={styles.toggleBtn} onClick={toggleTheme}>
      <span className={theme === "light" ? styles.sun : styles.moon}>
        {theme === "light" ? "🌞" : "🌙"}
      </span>
    </button>
  );
}
