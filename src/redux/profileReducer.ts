import {v1} from "uuid";


export type PostType = {
    id: string
    postContent: string
    likesCount: number
}
export type ProfilePageType = {
    postsData: PostType[]
    newTextPost: string
}
type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeTextPostActionType = ReturnType<typeof changeTextPostAC>
export type ProfileActionType = AddPostActionType | ChangeTextPostActionType

const initialState = {
    postsData: [
        {id: v1(), postContent: 'Gloria to Ukraine', likesCount: 13},
        {id: v1(), postContent: 'Gloria to heroes', likesCount: 12},
        {id: v1(), postContent: 'Death for enemies', likesCount: 13},
    ],
    newTextPost: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
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

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const changeTextPostAC = (changedValue: string) => {
    return {
        type: "CHANGE-TEXT-POST",
        changedValue: changedValue
    } as const
}