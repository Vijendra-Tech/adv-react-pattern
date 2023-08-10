import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReducerUse from "./components/ReducerUse";
import Hover from "./components/Hover";
import ThemeComp from "./components/ThemeComp";
import { Address } from "./patterns/compound/Input";

//custom hook
function useThemeMode() {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState(() => {
    return (
      localStorage.getItem("colorMode") ||
      (window.matchMedia(preferDarkQuery).matches ? "dark" : "light")
    );
  });

  useEffect(() => {
    const matchQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => setMode(matchQuery.matches ? "dark" : "light");
    matchQuery.addEventListener("change", handleChange);

    return () => matchQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    localStorage.setItem("colorMode", mode);
  }, [mode]);

  return [mode, setMode];
}

//theme styles
const styles = {
  dark: {
    color: "white",
    backgroundColor: "black",
  },
  light: {
    color: "black",
    backgroundColor: "white",
  },
};

function App() {
  const [mode, setMode] = useThemeMode();

  return (
    <>
      {/* <button
        style={styles[mode]}
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      >
        {mode}
      </button>
      <ReducerUse /> */}
      {/* <Hover /> */}
      {/* <ThemeComp /> */}
      <div style={{ backgroun: "black" }}>
        Compound Pattern
        <Address>
          <Address.Input placeholder="Enter an address, city, or ZIP code" />
          <Address.List>
            <Address.Item value="San Francisco, CA">
              San Francisco, CA
            </Address.Item>
            <Address.Item value="Seattle, WA">Seattle, WA</Address.Item>
            <Address.Item value="Austin, TX">Austin, TX</Address.Item>
            <Address.Item value="Miami, FL">Miami, FL</Address.Item>
            <Address.Item value="Boulder, CO">Boulder, CO</Address.Item>
          </Address.List>
        </Address>
      </div>
    </>
  );
}

export default App;
