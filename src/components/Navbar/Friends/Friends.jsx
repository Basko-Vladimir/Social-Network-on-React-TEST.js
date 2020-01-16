import React from "react";
import styles from "./Friends.module.css";
import FriendsItem from "./FriendItem/FriendsItem";

const Friends = (props) => {

    let friendsItem = props.sidebarPage.friends.map( d => <FriendsItem name={d.name} />);
    return (
        <div className={styles.friendsBlock}>
            <h4 className={styles.header}>Friends</h4>
            <div className={styles.friends}>
                {friendsItem}
            </div>
        </div>
    )
};

export default Friends;