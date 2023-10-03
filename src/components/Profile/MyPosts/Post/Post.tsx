import React, {FC} from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}
export const Post: FC<PostPropsType> = ({
                                            message,
                                            likesCount
                                        }) => {
    return (
        <div className={s.post}>
            <img src="https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/18-man-256.png" alt="ava"/>
            {message}
            <div>
                <span className={s.clickLike}>like</span> {likesCount}
            </div>
        </div>


    )
}