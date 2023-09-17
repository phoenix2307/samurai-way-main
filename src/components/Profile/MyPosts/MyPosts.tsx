import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

const postsData = [
    {id: '1', postContent: 'Gloria to Ukraine', likesCount: 13},
    {id: '2', postContent: 'Gloria to heroes', likesCount: 12},
    {id: '3', postContent: 'Death for enemies', likesCount: 13},
]

const postList = postsData
    .map(post=><Post message={post.postContent} likesCount={post.likesCount}/>)

type MyPostsPropsType = {}
export const MyPosts = (props: MyPostsPropsType) => {
    return (

        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                {postList}
                {/*<Post message={'Gloria to Ukraine'} likesCount={13}/>*/}
                {/*<Post message={'Gloria to heroes'} likesCount={12}/>*/}
                {/*<Post message={'Death for enemies'} likesCount={13}/>*/}
            </div>
        </div>

    )
}