import React from "react";
import styles from "./Users.module.css"
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onSetCurrentPage = (currentPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(currentPage);
            })
    };

    render() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pagesArray = [];

        for (let i = 1; i <= 20; i++) { // here hardcode pageCount = 20
            pagesArray.push(i);
        }

        return <div>
            <div className={styles.blockNumberPages}>
                {
                    pagesArray.map(p => (
                              <span key={p.id}
                              className={p === this.props.currentPage ? styles.activePage : null}
                              onClick={(event) => this.onSetCurrentPage(p)}>{p} </span>)
                    )
                }
            </div>
            {this.props.users.map(el =>
                <div key={el.id} className={styles.user}>
                    <div>
                        <div>
                            <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt="photo"
                                 className={styles.userPhoto}/>
                            <div>
                                {el.followed
                                    ? <button onClick={() => {
                                        this.props.follow(el.id)
                                    }}>Follow</button>
                                    : <button onClick={() => {
                                        this.props.unfollow(el.id)
                                    }}>unFollow</button>
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
        </div>
    }
}

export default Users;