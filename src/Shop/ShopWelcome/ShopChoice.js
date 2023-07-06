import React from "react";
import styles from "./ShopChoice.module.css";
import { Link } from "react-router-dom";
function ShopChoice(props) {
  return (
    <Link to={props.link} className={styles.maincontainer}>
    <div className={styles.container}>
    
        <img src={props.src} className={styles.fuckingImage}/>
    
      <div className={styles.description}>{props.title}</div>
      </div>
     </Link>
  );
}

export default ShopChoice;
