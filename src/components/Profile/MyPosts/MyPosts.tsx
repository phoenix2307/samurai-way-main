import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/redux";

type MyPostsPropsType = {
    postsData: PostType[]
}
export const MyPosts = ({postsData, ...props}: MyPostsPropsType) => {

    const postList = postsData
        .map(post=><Post message={post.postContent} likesCount={post.likesCount}/>)

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                {postList}

            </div>
        </div>

    )
}