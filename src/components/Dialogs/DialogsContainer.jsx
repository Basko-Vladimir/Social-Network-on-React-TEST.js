import React from "react";
import {addMessageActionCreator, changeMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let changeMessage = (body) => {
        let action = changeMessageActionCreator(body);
        props.store.dispatch(action);
    };

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    };

    return (
        <Dialogs dialogsPage={props.store.getState().dialogsPage}
                 changeMessage={changeMessage}
                 addMessage={addMessage}/>
    )
};

export default DialogsContainer;