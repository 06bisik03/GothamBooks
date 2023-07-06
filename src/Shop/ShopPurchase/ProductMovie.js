import { useState, useEffect } from "react";
import styles from "./ProductBook.module.css";

function ProductMovie(props) {
  function BuyHandler() {
    props.trigger();
    props.passChosenItem(props.item);
  }

  return (
    <div className={styles.wholeProduct} onClick={BuyHandler}>
      <div className={styles.imageTitle}>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w154/${props.item.poster_path}`}
          alt="Movie cover"
        />
      </div>

      <div className={styles.details}>
        <div className={`${styles.movieTitle} ${styles.truncate}`}>
          {props.item.title}
        </div>
        <div className={styles.price}>{`SUBSCRIBE`}</div>
      </div>
    </div>
  );
}

export default ProductMovie;
