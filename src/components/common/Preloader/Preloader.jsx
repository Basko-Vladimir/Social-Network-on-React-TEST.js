import React from "react";
import styles from './preloader.css'
import preloader from '../../../assets/images/Preloader.gif';

let Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt='image'/>
        </div>
    )
};

export default Preloader;

