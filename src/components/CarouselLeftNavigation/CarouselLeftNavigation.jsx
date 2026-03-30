import React from "react";
import styles from "./CarouselLeftNavigation.module.css";

function CarouselLeftNavigation({ onClick, disabled }) {
  return (
    <button
      className={`${styles.navButton} ${styles.left}`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous"
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
          d="M13.985 7.41L9.395 12L13.985 16.59L12.575 18L6.575 12L12.575 6L13.985 7.41Z"
          fill="black"
        />
      </svg>
    </button>
  );
}

export default CarouselLeftNavigation;