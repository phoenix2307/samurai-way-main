import React from "react";

import {addPostAC, changeTextPostAC, PostType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppDispatch, AppRootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

type MapStateMyPostsPropsType = {
    postsData: PostType[]
    updatedTextPost: string
}
type MapDispatchMyPostsPropsType = {
    sendPostCB: () => void
    onChangeHandlerMyPostsCB: (value: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateMyPostsPropsType => {
    return {
        postsData: state.profilePage.postsData,
        updatedTextPost: state.profilePage.newTextPost
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchMyPostsPropsType => {
    return {
        sendPostCB: () => dispatch(addPostAC()),
        onChangeHandlerMyPostsCB: (value: string) => dispatch(changeTextPostAC(value))
    }
}

export const MyPostsContainer = connect<MapStateMyPostsPropsType, MapDispatchMyPostsPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)
