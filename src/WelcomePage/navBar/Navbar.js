import { Fragment, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Shop/cart-ctx";
function Navbar() {
  const [signedIn, setSignedIn] = useState(false);
  const [wantedName, setWantedName] = useState("Sign in");
  const {
    totalItems,
    changeTotalItems,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  useEffect(() => {
    if (localStorage.getItem("signedIn")) {
      setWantedName(localStorage.getItem("userName"));
    }
  }, []);

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img
          src="/ShopWelcomeImages/gotamm.png"
          className={`${styles.picLogo} ${styles.logoImage}`}
        />
      </Link>
      <ul className={styles.navLinks}>
        <li>
          <Link to="login" className={`${styles.btn} ${styles.btnOne}`}>
            <span className={styles.btnSpan}>{wantedName}</span>
          </Link>
        </li>
        <li>
          <Link to="contacts" className={`${styles.btn} ${styles.btnOne}`}>
            <span className={styles.btnSpan}>Contact</span>
          </Link>
        </li>
        <li className={styles.services}>
          <Link to="shop" className={`${styles.btn} ${styles.btnOne}`}>
            <span className={styles.btnSpan}>Shop</span>
          </Link>
        </li>
        <li>
          <Link
            to="subscribeGotham"
            className={`${styles.btn} ${styles.btnOne}`}
          >
            <span className={styles.btnSpan}>Subscribe</span>
          </Link>
        </li>
        <li>
          <Link to="cart" className={`${styles.btn} ${styles.btnOne}`}>
            <span className={styles.btnSpan}>
              Cart
              <span id="cartCount" className={styles.cartCount}>
                {totalItems}
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
