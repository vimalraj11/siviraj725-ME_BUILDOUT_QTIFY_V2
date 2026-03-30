import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, apiUrl, type = "album" }) {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching section data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  useEffect(() => {
    if (type !== "songs") return;

    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/genres"
        );
        setGenres([{ key: "all", label: "All" }, ...response.data.data]);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, [type]);

  const filteredData = useMemo(() => {
    if (type !== "songs") return data;
    if (selectedGenre === "all") return data;
    return data.filter((item) => item.genre.key === selectedGenre);
  }, [data, selectedGenre, type]);

  const renderCard = (item) => (
    <Card
      image={item.image}
      title={item.title}
      follows={item.follows}
      likes={item.likes}
      type={type}
    />
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        {type !== "songs" && (
          <button
            type="button"
            className={styles.toggleButton}
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {type === "songs" && (
        <Tabs
          value={selectedGenre}
          onChange={(_, value) => setSelectedGenre(value)}
          className={styles.tabs}
          variant="scrollable"
          scrollButtons={false}
          textColor="inherit"
        >
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              value={genre.key}
              label={genre.label}
              className={styles.tab}
            />
          ))}
        </Tabs>
      )}

      {type !== "songs" && showAll ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={item.follows}
              likes={item.likes}
              type={type}
            />
          ))}
        </div>
      ) : (
        <Carousel data={filteredData} renderItem={renderCard} />
      )}
    </section>
  );
}

export default Section;