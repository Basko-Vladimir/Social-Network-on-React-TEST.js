import React from "react";
import styles from "../Dialogs.module.css";



const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
};

export default Message;