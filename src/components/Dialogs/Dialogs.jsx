import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let messageItem = props.dialogsPage.messages.map(m => <Message message={m.message}/>);
    let dialogsItem = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let onChangeMessage = (event) => {
        let text = event.target.value;
        props.changeMessage(text);
    };

    let onAddMessage = () => {
        props.addMessage();
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsItem}
            </div>
            <div>
                <div className={styles.messages}>
                    {messageItem}
                </div>
            </div>
            <textarea onChange={onChangeMessage}
                      value={props.dialogsPage.newMessageText}
                      placeholder='Enter your message'/>
            <div>
                <button onClick={onAddMessage}>Add new message</button>
            </div>
        </div>
    );
};

export default Dialogs;