import styles from "./Navbar.module.css";
import logo from "../assets/cafe-logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <img src={logo} alt="Root & Ritual Café" className={styles.logo} />
      </div>

      <div className={styles.links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/book-a-table">Book a table</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
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
