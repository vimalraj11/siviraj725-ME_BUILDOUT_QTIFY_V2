import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, apiUrl }) {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching ${title}:`, error);
      }
    };

    fetchData();
  }, [apiUrl, title]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        <button
          className={styles.toggleButton}
          onClick={() => setShowAll((prev) => !prev)}
          type="button"
        >
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={item.follows}
            />
          ))}
        </div>
      ) : (
        <Carousel
          data={data}
          renderItem={(item) => (
            <Card
              image={item.image}
              title={item.title}
              follows={item.follows}
            />
          )}
        />
      )}
    </div>
  );
}

export default Section;