import React from "react";
import styles from "./style.module.css";

function Card({ title, imageUrl }) {
  return (
    <div className={styles.card}>
      <img
        src={imageUrl}
        alt={title}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "https://picsum.photos/id/234/200/300";
        }}
      />
      <p>{title}</p>
    </div>
  );
}

export default Card;
