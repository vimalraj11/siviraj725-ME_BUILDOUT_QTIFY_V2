import React from "react";
import styles from "./CarouselRightNavigation.module.css";

function CarouselRightNavigation({ onClick, disabled }) {
  return (
    <button
      type="button"
      className={`${styles.navButton} ${styles.right}`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Next"
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
          d="M13.52 21.66L19.18 16L13.52 10.34L15.26 8.6L22.66 16L15.26 23.4L13.52 21.66Z"
          fill="black"
        />
      </svg>
    </button>
  );
}

export default CarouselRightNavigation;