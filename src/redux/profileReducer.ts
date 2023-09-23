import {ActionsType, PostType, ProfilePageType} from "./state";
import {v1} from "uuid";

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {

        case 'ADD-POST':
            let newPost: PostType = {
                id: v1(),
                postContent: state.newTextPost,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newTextPost = '';
            return state

        case 'CHANGE-TEXT-POST':
            state.newTextPost = action.changedValue
            return state

        default: return state
    }
}