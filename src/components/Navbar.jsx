import styles from "./Navbar.module.css";
import logo from "../assets/Roots and Ritual box.png";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <img src={logo} alt="Root & Ritual Café" className={styles.logo} />
      </div>

      <ul className={styles.links}>
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Book a table</li>
        <li>Contact</li>
      </ul>
      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {menuOpen && (
        <ul className={styles.mobileMenu}>
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Book a table</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
}
