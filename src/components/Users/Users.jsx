import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pagesArray = [];

    for (let i = 1; i <= 20; i++) { // here hardcode pageCount = 20, must be pageCount
        pagesArray.push(i);
    }

    return (
        <div>
            <div className={styles.blockNumberPages}>
                {
                    pagesArray.map(p => (
                        <span key={p.id}
                              className={p === props.currentPage ? styles.activePage : null}
                              onClick={(event) => props.onSetCurrentPage(p)}>{p} </span>)
                    )
                }
            </div>
            {props.users.map(u =>
                <div key={u.id} className={styles.user}>
                    <div>
                        <div>
                            <NavLink to={'/Profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="photo"
                                 className={styles.userPhoto}/>
                            </NavLink>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {props.follow(u.id)}}>Follow</button>
                                    : <button onClick={() => {props.unfollow(u.id)}}>unFollow</button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.userDescription}>
                        <div>{u.name}</div>
                        <div>{'u.location.country'},</div>
                        <div>{u.status}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>)}
        </div>)
};

export default Users;