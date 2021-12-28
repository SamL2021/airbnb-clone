import React from "react";
import styles from "./NavBar.module.scss";
import logo from "../../Assests/images/logo.jpg";

export const NavBar = () => {
    return (
        <nav className={styles["nav"]}>
            <img src={logo} />
        </nav>
    );
};
