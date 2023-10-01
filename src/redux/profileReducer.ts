import {ActionsType, PostType, ProfilePageType} from "./store";
import {v1} from "uuid";

const initialState = {
    postsData: [
        {id: v1(), postContent: 'Gloria to Ukraine', likesCount: 13},
        {id: v1(), postContent: 'Gloria to heroes', likesCount: 12},
        {id: v1(), postContent: 'Death for enemies', likesCount: 13},
    ],
    newTextPost: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
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