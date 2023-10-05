import React from "react";

import {addPostAC, changeTextPostAC, PostType, ProfileActionType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppDispatch, AppRootStateType, store, StoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";

// type MyPostsPropsType = {
    // postsData: PostType[]
    // dispatch: (action: DialogsActionType | ProfileActionType) => void
    // updatedTextPost: string
    // store: StoreType
// }
//
// export const MyPostsContainer: FC<MyPostsPropsType> = ({...props}) => {
//
//     const state = store.getState()
//
//     const sendPost = () => {
//         store.dispatch(addPostAC())
//     }
//
//     const onChangeHandler = (value: string) => {
//         store.dispatch(changeTextPostAC(value))
//     }
//
//
//     return (
//         <div>
//             <MyPosts postsData={state.profilePage.postsData} updatedTextPost={state.profilePage.newTextPost}
//                      sendPostCB={sendPost} onChangeHandlerMyPostsCB={onChangeHandler}/>
//         </div>
//
//     )
// }

const mapStateToProps = (state: AppRootStateType) => {
    return {
        postsData: state.profilePage.postsData,
        updatedTextPost: state.profilePage.newTextPost
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {

    return {
        sendPostCB: () => dispatch(addPostAC()),
        onChangeHandlerMyPostsCB: (value: string) => dispatch(changeTextPostAC(value))

    }
}

export const MyPostsContainer2 = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
