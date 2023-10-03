import React, {FC} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfileActionType} from "../../redux/profileReducer";
import {DialogsActionType} from "../../redux/dialogsReducer";

type ProfilePropsType = {
    postsData: PostType[]
    updatedTextPost: string
    dispatch: (action: DialogsActionType | ProfileActionType) => void
}

export const Profile: FC<ProfilePropsType> = ({
                                      postsData,
                                      updatedTextPost,
                                      dispatch
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