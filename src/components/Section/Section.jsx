import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, apiUrl }) {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setData(res.data);
    });
  }, [apiUrl]);

  const displayData = showAll ? data : data.slice(0, 7);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      <div className={styles.grid}>
        {displayData.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            follows={item.follows}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;