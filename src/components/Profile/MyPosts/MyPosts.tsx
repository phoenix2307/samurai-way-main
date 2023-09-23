import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsType, addPostAC, changeTextPostAC, PostType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: PostType[]
    dispatch: (action: ActionsType) => void
    updatedTextPost: string
}
export const MyPosts: React
    .FC<MyPostsPropsType> = ({
                                 postsData,
                                 dispatch,
                                 updatedTextPost,
                                 ...props
                             }) => {

    const refNewPost = React.createRef<HTMLTextAreaElement>()

    const sendPost = () => {
        dispatch(addPostAC())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeTextPostAC(e.currentTarget.value))
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
                    ref={refNewPost}
                    placeholder={'type new message'}
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