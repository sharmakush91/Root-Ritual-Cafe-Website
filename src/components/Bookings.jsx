import { useState, useEffect } from "react";
import styles from "./Bookings.module.css";
import Navbar from "./Navbar";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });

  const [error, setError] = useState("");

  const API_URL = "https://6a7ffba9ec7a640e63ab81e2.mockapi.io/bookings";

  // ----LOAD BOOKINGS ON MOUNT (GET) ----

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        console.log(data);
        setBookings(data);
      } catch (err) {
        setError("Failed to fetch bookings. Please try again later.");
      }
    };

    fetchBookings();
  }, []);

  const handleChange = function (e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ----LOAD BOOKINGS ON MOUNT (POST) ----

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const newBooking = await res.json();

      // add new booking to list
      setBookings((prev) => [...prev, newBooking]);

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        notes: "",
      });
    } catch (err) {
      setError("Failed to create booking.");
    }
  }

  return (
    <div className={styles.page}>
      <Navbar />

      <div className={styles.backgroundShape}></div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>ROOT & RITUAL CAFÉ</p>

        <h1 className={styles.title}>Book a Table</h1>

        <p className={styles.subtitle}>
          Good food, good coffee, and good company.
          <br />
          Reserve your table and make yourself at home.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.formTitle}>Reserve your table</h2>

          <p className={styles.formSubtitle}>
            Tell us a little about your visit.
          </p>

          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>

              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>

              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone</label>

              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="guests">Guests</label>

              <input
                type="number"
                name="guests"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                max="20"
                placeholder="Guests"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="date">Date</label>

              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="time">Time</label>

              <input
                type="time"
                name="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroupFull}>
              <label htmlFor="notes">Special requests</label>

              <textarea
                name="notes"
                id="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Dietary requirements, special notes"
                rows="4"
              />
            </div>
          </div>

          <button type="submit" className={styles.button}>
            Create booking
          </button>
        </form>
      </div>
    </div>
  );
}
