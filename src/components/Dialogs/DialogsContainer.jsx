import React from "react";
import {addMessageActionCreator, changeMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (value) => {
                let changeMessage = (body) => {
                    let action = changeMessageActionCreator(body);
                    value.dispatch(action);
                };
                let addMessage = () => {
                    let action = addMessageActionCreator();
                    value.dispatch(action);
                };

                return (
                    <Dialogs dialogsPage={value.getState().dialogsPage}
                             changeMessage={changeMessage}
                             addMessage={addMessage}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;