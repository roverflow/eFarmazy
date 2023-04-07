import React from "react";
import styles from "@/styles/Home.module.css";

const Loading = () => {
  return (
    <div className={styles.main}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
