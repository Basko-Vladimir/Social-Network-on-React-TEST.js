import React from "react";
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"

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
            {props.users.map(el =>
                <div key={el.id} className={styles.user}>
                    <div>
                        <div>
                            <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt="photo"
                                 className={styles.userPhoto}/>
                            <div>
                                {el.followed
                                    ? <button onClick={() => {props.follow(el.id)}}>Follow</button>
                                    : <button onClick={() => {props.unfollow(el.id)}}>unFollow</button>
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
                </div>)}
        </div>)
};

export default Users;