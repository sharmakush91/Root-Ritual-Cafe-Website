import { useState, useEffect } from "react";
import styles from "./HeroSlider.module.css";
import img1 from "../assets/cafe-image-1.jpg";
import img2 from "../assets/cafe-image-2.jpg";
import img3 from "../assets/cafe-image-3.jpg";
import img4 from "../assets/cafe-image-4.png";
import img5 from "../assets/cafe-image-5.jpg";

const images = [img1, img2, img3, img4, img5];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.slider}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className={styles.overlay}>
        <h1 className={styles.title}>Root & Ritual Café</h1>
        <p className={styles.subtitle}>Where every sip feels sacred</p>
      </div>
    </section>
  );
}
