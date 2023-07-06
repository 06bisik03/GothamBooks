import { useState, useEffect } from "react";
import styles from "./ProductBook.module.css";

function ProductBook(props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  function BuyHandler() {
    props.trigger();
    props.passChosenItem(props.item);
  }


  return (
    <div className={styles.wholeProduct} onClick={BuyHandler}>
      <div className={styles.imageTitle}>
        <img
          className={styles.image}
          src={props.item.thumbnail}
          alt="Book cover"
        />
      </div>

      <div className={styles.details}>
        <div className={`${styles.bookTitle} ${styles.truncate}`}>
          {props.item.title}
        </div>
        <div className={styles.price}>{` €${props.item.price}`}</div>
      </div>
    </div>
  );
}

export default ProductBook;
