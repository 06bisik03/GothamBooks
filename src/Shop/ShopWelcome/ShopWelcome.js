import React from "react";
import styles from "./ShopWelcome.module.css";
import ShopChoice from "./ShopChoice";

const choice = [
  {
    title: "Books",
    link: "books",
    src: "./ShopWelcomeImages/bookCover.jpg",
    key: 1,
  },

  {
    title: "Movies",
    link: "movies",
    src: "./ShopWelcomeImages/moviesCover.jpg",
    key: 4,
  },
];

function ShopWelcome() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.choicesContainer}>
          {choice.map((item) => (
            <ShopChoice key={item.key} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopWelcome;
