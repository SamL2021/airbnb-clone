import React from "react";
import grid from "../../Assests/images/grid.jpg";
import styles from "./Hero.module.scss";

export const Hero = () => {
    return (
        <section className={styles["hero"]}>
            <img src={grid} className={styles["hero--photo"]} />
            <h1 className={styles["hero--header"]}>Online Experiences </h1>
            <p className={styles["hero--text"]}>
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </section>
    );
};
