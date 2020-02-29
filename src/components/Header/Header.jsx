import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img alt='картинка' src='https://cdn1.iconfinder.com/data/icons/traveling-2/504/12-512.png'/>
            <div className={styles.login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
        </header>
    )
};

export default Header;