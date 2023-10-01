import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostType} from "../../redux/store";

type ProfilePropsType = {
    postsData: PostType[]
    updatedTextPost: string
    dispatch: (action: ActionsType) => void
}

export const Profile:
    React.FC<ProfilePropsType> = ({
                                      postsData,
                                      updatedTextPost,
                                      dispatch,
                                      ...props
                                  }) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}
                     dispatch={dispatch}
                     updatedTextPost={updatedTextPost}
            />
        </div>
    )
}