import styles from "./Cart.module.css";
import CartProduct from "./Helpers/CartProduct";
import { CartContext } from "../cart-ctx";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Cart() {
  const { changeTotalItems, cart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
  function NoItems() {
    return <div className={styles.noitem}>NO PRODUCT WAS BOUGHT YET!</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <label className={styles.title}>Your Cart</label>
        <div className={styles.summary}>
          <div className={styles.contentWrapper}>
            {cart.map((product) => {
              return (
                <CartProduct
                  product={product}
                  className={styles.cartProduct}
                  key={cart.indexOf(product)}
                />
              );
            })}
          </div>
          <div className={styles.total}></div>
        </div>

        {cart.length !== 0 && (
          <div className={styles.buttonWrapper}>
            <Link to="postpurchase" className={styles.formularButton}>
              Proceed To Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;