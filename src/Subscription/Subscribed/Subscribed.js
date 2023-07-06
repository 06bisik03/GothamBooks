import styles from "./Subscribed.module.css";
import { useLocation } from "react-router-dom";

function Subscribed(props) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.pageLayout}>
        <div className={styles.words}>
          <div className={styles.title}>Hail, Guardians of the Shadows</div>
          Congratulations! You have been promoted to{" "}
          <p>
            <span className={styles.customSpan}>{props.tier}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Subscribed;
