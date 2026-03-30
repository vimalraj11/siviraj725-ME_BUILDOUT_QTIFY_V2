import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ image, title, follows, likes, type = "album" }) {
  const chipLabel =
    type === "songs" ? `${likes} Likes` : `${follows} Follows`;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />

        <div className={styles.chipWrapper}>
          <Chip label={chipLabel} size="small" className={styles.chip} />
        </div>
      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;