import styles from "./BuyConfirmation.module.css";
import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../cart-ctx";
function BuyConfirmationBooks(props) {
  const [genreString, setGenreString] = useState(null);
  const [coverISBN, setCoverISBN] = useState("");
  const [isFaulty, setIsFaulty] = useState(false);

  const { changeTotalItems, cart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
  function addCartHandler(data) {
    props.closeModal();
    addToCart(props.currentItem);
    changeTotalItems(1);
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <div className={styles.closeContainer} onClick={props.closeModal}>
          <div className={styles.leftright}></div>
          <div className={styles.rightleft}></div>
          <label className={styles.close}>close</label>
        </div>
        <div className={styles.description}>
          <img alt="Book cover" src={props.currentItem.thumbnail} />
          <div className={styles.details}>
            {props.currentItem.title} <br />
            Genres: {props.currentItem.genre}
            <br />
            ISBN: {props.currentItem.isbn}
            <br />
            Pages: {props.currentItem.page}
            <br/>
            Price: {`€${props.currentItem.price}`} <br />
          </div>
        </div>
        <div className={styles.confirmation}>
          <button className={styles.formularButton} onClick={addCartHandler}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyConfirmationBooks;
