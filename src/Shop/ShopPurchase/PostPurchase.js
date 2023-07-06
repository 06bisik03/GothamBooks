import React from "react";
import styles from "./PostPurchase.module.css";
function PostPurchase() {
  return (
    <div className={styles["post-purchase-container"]}>
      <div className={styles.container}>
        <div className={styles.writing}>
          <h1>Thank You for Your Purchase!</h1>
          <p>Your order has been successfully placed.</p>
        </div>
      </div>
    </div>
  );
}

export default PostPurchase;
