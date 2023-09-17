import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    postsData: PostType[]
    addPostCallback: (newPost: string) => void
}

export const Profile = ({postsData, addPostCallback, ...props}: ProfilePropsType) => {
    return (
            <div className={s.profile}>
                <ProfileInfo/>
                <MyPosts postsData={postsData}
                         addPostCallback={addPostCallback}/>
            </div>
    )
}