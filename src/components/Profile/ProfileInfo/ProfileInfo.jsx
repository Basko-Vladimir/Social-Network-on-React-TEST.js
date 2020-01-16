import React from "react";
import styles from "./ProfileInfo.module.css";


const ProfileInfo = () => {


    return (
        <div>
            <div>
                <img alt='картинка'
                     src='https://st.depositphotos.com/1002489/1254/i/450/depositphotos_12544471-stock-photo-airplane-in-the-sky-at.jpg'/>
            </div>
            <div className={styles.avaDescription}>
                Ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;