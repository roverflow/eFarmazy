import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Header = (props) => {
  return (
    <div className={styles.description}>
      <p>{props.children}</p>
      <div className={props.hide ? styles.hide : ""}>
        <Link href="/about">
          By <code className={styles.code}>Team Threshold</code>
        </Link>
      </div>
    </div>
  );
};

export default Header;
