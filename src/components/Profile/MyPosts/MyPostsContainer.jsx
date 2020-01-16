import React from "react";
import {addPostActionCreator, changePostElementActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (value) => {

                let changePostElement = (text) => {
                    let action = changePostElementActionCreator(text);
                    value.dispatch(action);
                };

                let addPost = () => {
                    let action = addPostActionCreator();
                    value.dispatch(action);
                };

                return (
                    <MyPosts profilePage={value.getState().profilePage}
                             addPost={addPost}
                             changePostElement={changePostElement}/>
                )
            }
        }
        </StoreContext.Consumer>)

};

export default MyPostsContainer;
