import Navbar from "../Navbar.jsx";
import styles from "./AboutUs.module.css";
import kushImage from "../../assets/about-us-heroimg.png";

export default function AboutUs() {
  return (
    <div>
      <Navbar />

      <div className={styles.aboutContainer}>
        {/* LEFT — IMAGE */}
        <div className={styles.imageSection}>
          <img src={kushImage} alt="Kush Sharma portrait" />
        </div>

        {/* RIGHT — TEXT */}
        <div className={styles.textSection}>
          <h1 className={styles.heading}>
            KUSH SHARMA — THE STORY BEHIND ROOT & RITUAL
          </h1>

          <p className={styles.text}>
            Kush never planned to open a café. Not at first. His journey began
            long before Root & Ritual existed — in quiet early mornings, in the
            comfort of warm spices, and in the small rituals that made life feel
            grounded. Growing up, he was always drawn to spaces that felt
            intentional: the smell of fresh bread, the calm of a slow‑brewed
            chai, the way a shared meal could soften even the hardest day.
          </p>

          <p className={styles.text}>
            While studying and working across different fields, Kush carried a
            quiet fascination with how food shapes people’s moods, energy, and
            connection. He spent late nights experimenting with flavours,
            learning about whole‑food cooking, and exploring the philosophy
            behind mindful eating. What started as curiosity slowly became a
            calling.
          </p>

          <p className={styles.text}>
            His turning point came during a period of burnout — when life felt
            fast, loud, and disconnected. Instead of pushing through, Kush
            paused. He travelled, observed, and rediscovered the grounding
            rituals he had always loved: slow mornings, earthy textures,
            nourishing meals, and conversations that felt real. He realised that
            people weren’t just hungry for food — they were hungry for calm, for
            intention, for a place to breathe.
          </p>

          <p className={styles.text}>
            Root & Ritual was born from that moment. With no formal culinary
            background, Kush built the café the same way he rebuilt his life:
            slowly, intentionally, and with deep respect for nature. He crafted
            a menu inspired by whole foods, Ayurvedic balance, and the idea that
            nourishment should feel both comforting and clean. He designed the
            space to feel warm, earthy, and human — a place where people could
            pause, gather, and reconnect.
          </p>
        </div>
      </div>
    </div>
  );
}
