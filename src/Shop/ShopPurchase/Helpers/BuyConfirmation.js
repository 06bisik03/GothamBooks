import styles from "./BuyConfirmation.module.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../cart-ctx";
import { Link } from "react-router-dom";
function BuyConfirmation(props) {
  const [genreString, setGenreString] = useState(null);

  const { changeTotalItems, cart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  const { title, backdrop_path, id, price } = props.currentItem[0];
  function addCartHandler(data) {
    props.closeModal();

    addToCart({
      title,
      thumbnail: `https://image.tmdb.org/t/p/w342/${backdrop_path}`,
      id,
      price,
    });
  }
  useEffect(() => {
    const genres = props.currentItem[0].genres.map((item) => {
      return item.name;
    });
    setGenreString(genres.join("/"));
  }, []);

  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <div className={styles.closeContainer} onClick={props.closeModal}>
          <div className={styles.leftright}></div>
          <div className={styles.rightleft}></div>
          <label className={styles.close}>close</label>
        </div>
        <div className={styles.description}>
          <img
            src={`https://image.tmdb.org/t/p/w342/${props.currentItem[0].poster_path}`}
          />
          <div className={styles.details}>
            {props.currentItem[0].title} <br />
            Genres:{" "}
            {genreString
              ? genreString
              : "No genres have been assigned to this movie!"}{" "}
            <br />
            Rating:{" "}
            {props.currentItem[0].vote_count < 1
              ? "No one has rated this movie yet!"
              : props.currentItem[0].vote_average.toFixed(1)}{" "}
          </div>
        </div>
        <div className={styles.confirmation}>
          <Link className={styles.formularButton} to="/subscribeGotham">
            Subscribe To Watch
          </Link>
        </div>
      </div>
    </div>
  );
}
export default BuyConfirmation;
