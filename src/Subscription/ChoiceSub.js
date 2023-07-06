import styles from "./ChoiceSub.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function ChoiceSub(props) {
  return (
    <div className={styles.container}>
      <div className={styles.tierContainer}>
        <div className={styles.title}>Gotham Novice Tier</div>
        <div className={styles.priceBox}>
          <span className={styles.price}>€4.99</span>
        </div>
        <div className={styles.perks}>
          <ul className={styles.perksMember}>
            <li>Free unlimited Movies</li>
            <li>Faster delivery</li>
            <li>Exclusive early-access</li>
          </ul>
        </div>
        <Link to="subBoughtGN">
          <button className={styles.formularButton}>
            Become a Gotham Novice!
          </button>
        </Link>
      </div>
      <div className={styles.tierContainer}>
        <div className={styles.title}>Dark Knight Elite Tier</div>
        <div className={styles.priceBox}>
          <span>€9.99</span>
        </div>
        <div className={styles.perks}>
          <ul className={styles.perksMember}>
            <li>Perks of a Gotham Novice.</li>
            <li>Monthly Q&A sessions</li>
            <li>1 free E-Book/month</li>
          </ul>
        </div>
        <Link to="subBoughtDK">
          <button className={styles.formularButton}>
            Become an elite dark knight
          </button>
        </Link>
      </div>
      <div className={styles.tierContainer}>
        <div className={styles.title}>Arkham Legend Tier</div>
        <div className={styles.priceBox}>
          <span>€19.99</span>
        </div>
        <div className={styles.perks}>
          <ul className={styles.perksMember}>
            <li>Perks of a Dark Knight</li>
            <li>Access to VIP events</li>
            <li>Personalized Web-Theme</li>
          </ul>
        </div>
        <Link to="subBoughtAL">
          <button className={styles.formularButton}>
            Become an Arkham legend
          </button>
        </Link>
      </div>
    </div>
  );
}
export default ChoiceSub;
