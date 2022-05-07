import React, { useContext } from "react";
import styles from "./css/searchSection.module.css";

import Loading from "./Loading";

import { searchContext } from "../Contexts/SearchContextProvider";
import useFetchData from "../Hooks/useFetchData";

const SearchSection = () => {
  const { searchText } = useContext(searchContext);
  const [searchData, loading] = useFetchData("search", searchText);

  return (
    <>
      {loading && <Loading />}

      {!loading && searchData !== null && searchData.results.length !== 0 && (
        <section className={styles.mainConatiner}>
          {searchData.results.map(({ title, link, description }, index) => {
            return (
              <div key={index}>
                <h3>{link}</h3>
                <h1>
                  <a href={link} target="_blank">
                    {title}
                  </a>
                </h1>
                <p>{description}</p>
              </div>
            );
          })}
        </section>
      )}

      {!loading && searchData !== null && searchData.results.length === 0 && (
        <section className="emptySection">
          <h1>NO SEARCH RESULTS FOUND</h1>
        </section>
      )}
    </>
  );
};

export default SearchSection;
