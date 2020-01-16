import React from "react";
import styles from "./FriendsItem.module.css";

const FriendsItem = (props) => {
    return (
        <div className={styles.friendItem}>
            <img src='http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png'/>
            <div className={styles.friendName}>{props.name}</div>
        </div>
    )
};

export default FriendsItem;