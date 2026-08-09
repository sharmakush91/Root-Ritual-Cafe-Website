import styles from "./Navbar.module.css";
import logo from "../assets/Roots and Ritual box.png";

export default function Navbar() {
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
    </nav>
  );
}
