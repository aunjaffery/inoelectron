import React, { useState } from "react";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Theme";
import Slider from "./components/Slider/Silder";
import Companies from "components/Companies/Companies";
import Footer from "components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState(false);
  const themeToggle = () => {
    console.log("works");
    setTheme(!theme);
  };
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Header themeToggle={themeToggle} nowtheme={theme ? "Dark" : "Light"} />
      <Slider />
      <Companies />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
