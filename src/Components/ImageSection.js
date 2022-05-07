import React, { useContext } from "react";
import styles from "./css/imageSection.module.css";

import Loading from "./Loading";

import { searchContext } from "../Contexts/SearchContextProvider";
import useFetchData from "../Hooks/useFetchData";

const ImageSection = () => {
  const { searchText } = useContext(searchContext);
  const [searchData, loading] = useFetchData("image", searchText);

  return (
    <>
      {loading && <Loading />}

      {!loading &&
        searchData !== null &&
        searchData.image_results.length !== 0 && (
          <section className={styles.mainContainer}>
            {searchData.image_results.map(({ image, link }, index) => {
              const { src, alt } = image;
              const { title, href, domain } = link;
              return (
                <div key={index} className={styles.imageContainer}>
                  <img src={src} alt={alt === "" ? "photo" : alt} />
                  <a href={href} target="_blank">
                    <h3>{title}</h3>
                    <h5>{domain}</h5>
                  </a>
                </div>
              );
            })}
          </section>
        )}

      {!loading &&
        searchData !== null &&
        searchData.image_results.length === 0 && (
          <section className="emptySection">
            <h1>NO SEARCH RESULTS FOUND</h1>
          </section>
        )}
    </>
  );
};

export default ImageSection;
