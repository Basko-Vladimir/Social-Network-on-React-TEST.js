import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import StoreContext from "../../StoreContext";


const Navbar = () => {
    return (
        <StoreContext.Consumer>{
            (value) => {
                return (
                    <nav className={styles.nav}>
                        <div className={styles.item}>
                            <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
                        </div>
                        <div className={styles.item}>
                            <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
                        </div>
                        <div className={styles.item}>
                            <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
                        </div>
                        <div className={styles.item}>
                            <NavLink to='/music' activeClassName={styles.activeLink}>Music</NavLink>
                        </div>
                        <div className={styles.item}>
                            <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
                        </div>
                        <Friends sidebarPage={value.getState().sidebarPage}/>
                    </nav>
                )
            }
        }
        </StoreContext.Consumer>
    )
};

export default Navbar;