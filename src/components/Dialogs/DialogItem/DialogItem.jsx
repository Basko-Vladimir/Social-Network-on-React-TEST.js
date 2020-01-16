import React from "react";
import styles from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    return (
        <div className={styles.link}>
            <img src='http://www.solarworks.co.kr/images_site/user.png' alt='users'/>
            <NavLink activeClassName={styles.active} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;