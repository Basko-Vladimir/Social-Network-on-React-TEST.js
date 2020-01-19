import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {
    let newUsers = [
        {
            id: 1,
            userName: 'Vladimir',
            followed: true,
            status: 'I\'am a president',
            location: {country: 'Ukraine', city: 'Kiev'},
            photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Volodymyr_Zelensky_Official_portrait.jpg/1200px-Volodymyr_Zelensky_Official_portrait.jpg'
        },
        {
            id: 2,
            userName: 'Elena',
            followed: false,
            status: 'I\'m a first lady',
            location: {country: 'Ukraine', city: 'Kiev'},
            photoURL: 'https://img.dni.ru/binaries/v3_photo/125320.jpg'
        },
        {
            id: 3,
            userName: 'Evgenii',
            followed: true,
            status: 'I\'m a blogger and I like football',
            location: {country: 'Russia', city: 'Moskow'},
            photoURL: 'https://24smi.org/public/media/celebrity/2019/03/19/crub8rogeoln-evgenii-savin.jpg'
        }
    ];

    if (props.users.length === 0) {
       props.setUsers(newUsers);
    }


    return (
        props.users.map(el =>
            <div keys={el.id} className={styles.user}>
                <div>
                    <div>
                        <img src={el.photoURL} alt="photo" className={styles.userPhoto}/>
                        <div>
                            {el.followed
                                ? <button onClick={() => {props.follow(el.id)} }>Follow</button>
                                : <button onClick={() => {props.unfollow(el.id)} }>unFollow</button>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.userDescription}>
                    <div>{el.userName}</div>
                    <div>{el.location.country},</div>
                    <div>{el.status}</div>
                    <div>{el.location.city}</div>
                </div>
            </div>)
    )
};

export default Users;

