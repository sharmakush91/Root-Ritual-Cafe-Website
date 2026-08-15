import styles from "./OurStory.module.css";
import { NavLink } from "react-router-dom";

export default function OurStory() {
  return (
    <section className={styles.story}>
      <div className={styles.content}>
        <h2 className={styles.title}>Our Story</h2>

        <p className={styles.text}>
          Root & Ritual Café was born from a simple idea — to create a space
          where every sip, every bite, and every moment feels intentional.
          Inspired by earthy textures, slow living, and the warmth of shared
          rituals, we craft food and coffee that nourish both body and soul.
        </p>

        <p className={styles.text}>
          From our balanced bread philosophy to our mindful brewing methods,
          everything we serve is made with care, curiosity, and a deep respect
          for nature. This is more than a café — it’s a place to pause, gather,
          and reconnect.
        </p>

        <NavLink to="/about" className={styles.button}>
          Learn More
        </NavLink>
      </div>
    </section>
  );
}
