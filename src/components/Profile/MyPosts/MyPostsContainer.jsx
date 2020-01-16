import React from "react";
import {addPostActionCreator, changePostElementActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let changePostElement = (text) => {
        let action = changePostElementActionCreator(text);
        props.store.dispatch(action);
    };

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    return (
        <MyPosts profilePage={props.store.getState().profilePage}
                 addPost={addPost}
                 changePostElement={changePostElement}/>
    )

};

export default MyPostsContainer;
