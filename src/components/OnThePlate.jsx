import img1 from "../assets/eggs-benedict.jpg";
import img2 from "../assets/granola-bowl.jpg";
import img3 from "../assets/vegan-breakfast.jpg";
import img4 from "../assets/vegan-dessert.jpg";
import img5 from "../assets/scrambledeggs-ginseng-toast.jpg";
import img6 from "../assets/grilled-chicken.jpg";
import styles from "./OnThePlate.module.css";
import { NavLink } from "react-router-dom";

const images = [img1, img2, img3, img4, img5, img6];

export default function OnThePlate() {
  return (
    <section className={styles.plate}>
      <div className={styles.content}>
        <h1 className={styles.title}>On The Plate</h1>
        <p className={styles.description}>
          A curated selection of dishes crafted with balance, warmth, and
          intention nourishing the body through seasonal ingredients and mindful
          preparation.
        </p>
        <div className={styles.grid}>
          {images.map((img, index) => (
            <div key={index} className={styles.card}>
              <img
                src={img}
                alt={`Menu item ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </div>
        <NavLink to="/menu">
          <button className={styles.button}>Our Menu</button>
        </NavLink>
      </div>
    </section>
  );
}
