import React from "react";
import styles from "./css/loading.module.css";

const Loading = () => {
  return (
    <section className={styles.loadingContainer}>
      <div className={styles.lds_dual_ring}></div>
    </section>
  );
};

export default Loading;
