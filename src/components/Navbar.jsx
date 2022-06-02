import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

import styles from "./navbar.module.scss";

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav className={`${styles.nav} ${styles[theme]}`}>
      <h1 className="text">LOGO</h1>
      <ul className="text">
        <li>About</li>
        <li>Item2</li>
        <li>Item3</li>
        <li>Item4</li>
      </ul>
    </nav>
  );
};
