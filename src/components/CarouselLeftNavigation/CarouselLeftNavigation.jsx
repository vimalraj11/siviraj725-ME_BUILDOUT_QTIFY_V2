import React from "react";
import styles from "./CarouselLeftNavigation.module.css";

function CarouselLeftNavigation({ onClick, disabled }) {
  return (
    <button
      type="button"
      className={`${styles.navButton} ${styles.left}`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="white" />
        <path
          d="M18.48 10.34L12.82 16L18.48 21.66L16.74 23.4L9.34 16L16.74 8.6L18.48 10.34Z"
          fill="black"
        />
      </svg>
    </button>
  );
}

export default CarouselLeftNavigation;