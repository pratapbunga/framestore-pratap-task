import React from "react";
import {
  MdDarkMode,
  MdOutlineLightMode,
  MdAccountCircle,
} from "react-icons/md";
import useLocalStorage from "use-local-storage";
import { Outlet, Link } from "react-router-dom";
import Clock from "../Clock";
export default function Layout({ children }) {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="layout" data-theme={theme}>
      <header className="header">
        <span className="title">Framestore</span>
        <span className="theme-button">
          <span className="px-10" onClick={switchTheme}>
            {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
          </span>
          <Link to={`/login`}>
            <MdAccountCircle />{" "}
          </Link>
        </span>
      </header>
      <main>
        <Clock />
        <br />
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
