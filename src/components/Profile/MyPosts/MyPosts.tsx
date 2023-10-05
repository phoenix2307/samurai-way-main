import React, {ChangeEvent, FC} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostAC, changeTextPostAC, PostType, ProfileActionType} from "../../../redux/profileReducer";
import {DialogsActionType} from "../../../redux/dialogsReducer";

// type MyPostsPropsType = {
//     postsData: PostType[]
//     dispatch: (action: DialogsActionType | ProfileActionType) => void
//     updatedTextPost: string
// }
//
// export const MyPosts: FC<MyPostsPropsType> = ({
//                                                   postsData,
//                                                   dispatch,
//                                                   updatedTextPost
//                                               }) => {
//
//
//     const sendPost = () => {
//         dispatch(addPostAC())
//     }
//
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         dispatch(changeTextPostAC(e.currentTarget.value))
//     }
//
//     const postList = postsData
//         .map(post => <Post
//             key={post.id}
//             message={post.postContent}
//             likesCount={post.likesCount}/>)
//
//     return (
//         <div className={s.myPosts}>
//             <h3>My posts</h3>
//             <div className={s.addPost}>
//                 <textarea
//                     placeholder={'type new post'}
//                     onChange={onChangeHandler}
//                     value={updatedTextPost}></textarea>
//                 <button onClick={sendPost}>SEND</button>
//             </div>
//             <div className={s.posts}>
//                 {postList}
//             </div>
//         </div>
//
//     )
// }


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
                                                  onChangeHandlerMyPostsCB
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