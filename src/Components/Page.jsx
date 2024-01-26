import React from "react";
import { useThemeContext } from "../Contexts";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main/Main";

export default function Page() {
  const { darkMode } = useThemeContext();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
