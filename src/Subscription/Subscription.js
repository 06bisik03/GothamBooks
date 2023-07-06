import styles from "./Subscription.module.css";
import Navbar from "../WelcomePage/navBar/Navbar";
import ChoiceSub from "./ChoiceSub";
function Subscription(props) {
  return (
    <div className={styles.mainContainer}>
      <div class={styles.background}>
        <div class={styles.cube}></div>
        <div class={styles.cube}></div>
        <div class={styles.cube}></div>
        <div class={styles.cube}></div>
        <div class={styles.cube}></div>
        <div className={styles.ad}>
          <p>
          
            <span className={styles.customSpan}>
              UNLEASH YOUR INNER CAPED CRUSADER OF READING WITH GOTHAMBOOKS.
            </span>
          </p>
        </div>

        <ChoiceSub />
      </div>

     
    </div>
  );
}
export default Subscription;
