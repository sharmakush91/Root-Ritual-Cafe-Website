import { useState, useEffect } from "react";
import styles from "./HeroSlider.module.css";
import img1 from "../assets/cafe-image-1.jpg";
import img2 from "../assets/cafe-image-2.jpg";
import img3 from "../assets/cafe-image-3.jpg";
import img4 from "../assets/cafe-image-4.png";
import img5 from "../assets/cafe-image-5.jpg";

const images = [img1, img2, img3, img4, img5];
const messages = [
  {
    title: "Root & Ritual Café",
    subtitle: "Where every sip feels sacred",
  },
  {
    title: "Brewed With Intention",
    subtitle: "Coffee crafted for mindful moments",
  },
  {
    title: "Baked With Balance",
    subtitle: "Our bread philosophy is harmony",
  },
  {
    title: "Earthy. Warm. Honest.",
    subtitle: "A space inspired by nature",
  },
  {
    title: "Gather. Pause. Restore.",
    subtitle: "Your ritual begins here",
  },
];

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
        <h1 className={styles.title}>{messages[current].title}</h1>
        <p className={styles.subtitle}>{messages[current].subtitle}</p>
      </div>
    </section>
  );
}
