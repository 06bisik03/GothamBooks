import styles from "./Welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.logo}/>
        
        <div className={styles.title}>
          WELCOME TO <br /> GOTHAMBOOKS!
        </div>
        <div className={styles.motto}>...where pages take flight</div>
        <div className={styles.boxTwo}>
          <Link to="shop" className={`${styles.btn} ${styles.btnTwo}`}>
            SHOP NOW!
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
