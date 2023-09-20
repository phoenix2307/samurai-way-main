import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    postsData: PostType[]
    addPostCallback: () => void
    changeTextPost: (changedValue: string) => void
    updatedTextPost: string
}

export const Profile: React.FC<ProfilePropsType> = ({
                                                        postsData,
                                                        addPostCallback,
                                                        updatedTextPost,
                                                        ...props
                                                    }) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}
                     addPostCallback={addPostCallback}
                     changeTextPost={props.changeTextPost}
                     updatedTextPost={updatedTextPost}
            />
        </div>
    )
}