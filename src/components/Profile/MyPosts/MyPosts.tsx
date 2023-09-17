import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: PostType[]
    addPostCallback: (newPost: string) => void
}
export const MyPosts = ({postsData, addPostCallback, ...props}: MyPostsPropsType) => {

    const refNewPost = React.createRef<HTMLTextAreaElement>()

    const sendPost = () => {
        if (refNewPost.current)
            addPostCallback(refNewPost.current.value)
    }

    const postList = postsData
        .map(post => <Post
            key={post.id}
            message={post.postContent}
            likesCount={post.likesCount}/>)

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div className={s.addPost}>
                <textarea ref={refNewPost} placeholder={'type new message'}></textarea>
                <button onClick={sendPost}>SEND</button>
            </div>
            <div className={s.posts}>
                {postList}

            </div>
        </div>

    )
}