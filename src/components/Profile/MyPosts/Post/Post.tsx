import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
}
export const Post = ({message, ...rest}: PostPropsType) => {
    return (
        <div className={s.post}>
            <img src="https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/18-man-256.png" alt="ava"/>
            {message}
            <div>
                <span>like</span>
            </div>
        </div>


    )
}