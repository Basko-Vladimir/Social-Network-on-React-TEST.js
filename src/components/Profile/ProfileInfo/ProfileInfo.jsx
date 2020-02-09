import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import noSmile from "../../../assets/images/no.gif";
import yesSmile from "../../../assets/images/yes.gif";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img alt='картинка'
                     src='https://st.depositphotos.com/1002489/1254/i/450/depositphotos_12544471-stock-photo-airplane-in-the-sky-at.jpg'/>
            </div>
            <div className={styles.avaDescription}>
                <div>
                    <img src={props.profile.photos.small} alt='avatar'/>
                </div>
                <div>
                    <div className={styles.profileName}>{props.profile.fullName}</div>
                    <div className={styles.aboutProfile}>{props.profile.aboutMe}</div>
                </div>
            </div>
            <div>
                <span className={styles.jobText}>Looking I for a job? </span>
                <img className={styles.jobSmile} src={!props.profile.lookingForAJob ? yesSmile : noSmile} alt='smile'/>
            </div>
        </div>
    )
};

export default ProfileInfo;