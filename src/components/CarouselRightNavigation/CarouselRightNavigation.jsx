import React from "react";
import styles from "./CarouselRightNavigation.module.css";

function CarouselRightNavigation({ onClick, disabled }) {
  return (
    <button
      className={`${styles.navButton} ${styles.right}`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Next"
      type="button"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="white" />
        <path
          d="M10.015 16.59L14.605 12L10.015 7.41L11.425 6L17.425 12L11.425 18L10.015 16.59Z"
          fill="black"
        />
      </svg>
    </button>
  );
}

export default CarouselRightNavigation;