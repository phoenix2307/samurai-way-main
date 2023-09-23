import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostType} from "../../redux/state";

type ProfilePropsType = {
    postsData: PostType[]
    dispatch: (action: ActionsType) => void
    updatedTextPost: string
}

export const Profile: React
    .FC<ProfilePropsType> = ({
                                 postsData,
                                 dispatch,
                                 updatedTextPost,
                                 ...props
                             }) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}
                     dispatch={dispatch}
                // addPostCallback={addPostCallback}
                // changeTextPost={props.changeTextPost}
                     updatedTextPost={updatedTextPost}
            />
        </div>
    )
}