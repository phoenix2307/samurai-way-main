import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/redux";

type ProfilePropsType = {
    postsData: PostType[]
}

export const Profile = ({postsData}: ProfilePropsType) => {
    return (
            <div className={s.profile}>
                <ProfileInfo/>
                <MyPosts postsData={postsData}/>
            </div>
    )
}