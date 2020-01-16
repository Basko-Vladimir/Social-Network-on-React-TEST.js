import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsItem = props.profilePage.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>);

    let onChangePostElement = (event) => {
        let text = event.target.value;
        props.changePostElement(text);
    };

    let onAddPost = () => {
        props.addPost();
    };
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangePostElement} value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsItem}
            </div>
        </div>
    )
};

export default MyPosts;