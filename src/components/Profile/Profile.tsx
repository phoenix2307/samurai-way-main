import React, {FC} from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfileActionType} from "../../redux/profileReducer";
import {DialogsActionType} from "../../redux/dialogsReducer";
import { MyPostsContainer2} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    // postsData: PostType[]
    // updatedTextPost: string
    // dispatch: (action: DialogsActionType | ProfileActionType) => void
    // store: StoreType
}

export const Profile: FC<ProfilePropsType> = ({
                                      // postsData,
                                      // updatedTextPost,
                                      // dispatch
    // store
                                  }) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer2/>
            {/*<MyPostsContainer*/}
            {/*    // store={store}*/}
            {/*    // postsData={postsData}*/}
            {/*    // dispatch={dispatch}*/}
            {/*    // updatedTextPost={updatedTextPost}*/}
            {/*/>*/}
            {/*<MyPosts postsData={postsData}*/}
            {/*         dispatch={dispatch}*/}
            {/*         updatedTextPost={updatedTextPost}*/}
            {/*/>*/}
        </div>
    )
}