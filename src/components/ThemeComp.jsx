import React from "react";
import "./hover.css";
import { useTheme } from "../hooks/useTheme";

function ThemeComp() {
  const {theme, setTheme} = useTheme();
  return (
    <>
      <div>
        {theme === "light" ? (
          <div className="hover-1" style={{ backgroundColor: "black" }}></div>
        ) : (
          <div className="hover-1" style={{ backgroundColor: "white" }}></div>
        )}
      </div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#000",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        Change Theme
      </button>
    </>
  );
}

export default ThemeComp;
