import React, {ChangeEvent, FC} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profileReducer";

// type MyPostsPropsType = MapStateMyPostsPropsType & MapDispatchMyPostsPropsType
type MyPostsPropsType = {
    postsData: PostType[]
    updatedTextPost: string
    sendPostCB: () => void
    onChangeHandlerMyPostsCB: (value: string) => void
}

export const MyPosts: FC<MyPostsPropsType> = ({
                                                  postsData,
                                                  updatedTextPost,
                                                  sendPostCB,
                                                  onChangeHandlerMyPostsCB,
                                                  ...props
                                              }) => {


    const sendPost = () => {
        sendPostCB()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeHandlerMyPostsCB(e.currentTarget.value)
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
                <textarea
                    placeholder={'type new post'}
                    onChange={onChangeHandler}
                    value={updatedTextPost}></textarea>
                <button onClick={sendPost}>SEND</button>
            </div>
            <div className={s.posts}>
                {postList}
            </div>
        </div>

    )
}