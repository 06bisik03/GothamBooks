import { CartContext } from "../../cart-ctx";
import styles from "./CartProduct.module.css";
import { useContext, useState } from "react";
function CartProduct(givenProduct) {
  console.log(givenProduct.product);
  return (
    <div className={styles.container}>
      <img className={styles.image} src={givenProduct.product.thumbnail} />
      <div className={styles.description}>{givenProduct.product.title}</div>
      <div className={styles.price}>&#8364;{givenProduct.product.price}</div>
    </div>
  );
}
export default CartProduct;
