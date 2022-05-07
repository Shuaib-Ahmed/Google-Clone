import React, { useContext } from "react";
import styles from "./css/newsSection.module.css";

import Loading from "./Loading";

import { searchContext } from "../Contexts/SearchContextProvider";
import useFetchData from "../Hooks/useFetchData";

const NewsSection = () => {
  const { searchText } = useContext(searchContext);
  const [searchData, loading] = useFetchData("news", searchText);

  return (
    <>
      {loading && <Loading />}

      {!loading && searchData !== null && searchData.entries.length !== 0 && (
        <section className={styles.mainContainer}>
          {searchData.entries.map(({ title, link }, index) => {
            return (
              <div key={index} className={styles.newsContainer}>
                <h3>{title}</h3>
                <a href={link} target="_blank">
                  {link}
                </a>
              </div>
            );
          })}
        </section>
      )}

      {!loading && searchData !== null && searchData.entries.length === 0 && (
        <section className="emptySection">
          <h1>NO SEARCH RESULTS FOUND</h1>
        </section>
      )}
    </>
  );
};

export default NewsSection;
