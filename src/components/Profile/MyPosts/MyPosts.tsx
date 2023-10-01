import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostAC, changeTextPostAC, PostType, ProfileActionType} from "../../../redux/profileReducer";
import {DialogsActionType} from "../../../redux/dialogsReducer";


type MyPostsPropsType = {
    postsData: PostType[]
    dispatch: (action: DialogsActionType | ProfileActionType) => void
    updatedTextPost: string
}
export const MyPosts:
    React.FC<MyPostsPropsType> = ({
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