import React from "react";
import styles from "./Users.module.css"
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png"
const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });
    }

    return (
        props.users.map(el =>
            <div keys={el.id} className={styles.user}>
                <div>
                    <div>
                        <img src={el.photos.small !== null ? el.photos.small : userPhoto } alt="photo" className={styles.userPhoto}/>
                        <div>
                            {el.followed
                                ? <button onClick={() => {props.follow(el.id)} }>Follow</button>
                                : <button onClick={() => {props.unfollow(el.id)} }>unFollow</button>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.userDescription}>
                    <div>{el.name}</div>
                    <div>{'el.location.country'},</div>
                    <div>{el.status}</div>
                    <div>{'el.location.city'}</div>
                </div>
            </div>)
    )
};

export default Users;

