import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <img alt='картинка' src='https://cdn1.iconfinder.com/data/icons/traveling-2/504/12-512.png'/>
        </header>
    )
};

export default Header;