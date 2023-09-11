import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
type MyPostsPropsType = {}
export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <>
            <div className={s.myPosts}>
                My posts
                <div className={s.addPost}>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message={'Gloria to Ukraine'} likesCount={'13'}/>
                    <Post message={'Gloria to heroes'} likesCount={'12'}/>
                    <Post message={'Death for enemies'} likesCount={'13'}/>
                </div>
            </div>
        </>
    )
}