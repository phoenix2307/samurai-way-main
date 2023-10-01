import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {ActionsType} from "./store";


// Typing from old state

export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    messageText: string
}
export type PostType = {
    id: string
    postContent: string
    likesCount: number
}
export type ProfilePageType = {
    postsData: PostType[]
    newTextPost: string
}
export type DialogsPageType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessage: string
}
export type StateType = {
    profilePage: {
        postsData: PostType[],
        newTextPost: string
    }
    dialogsPage: {
        dialogsData: DialogType[],
        messagesData: MessageType[],
        newMessage: string
    }
    newsPage: {}
    musicPage: {}
    settingsPage: {}
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (callback: (state: StateType) => void) => void
    dispatch: (action: ActionsType) => void
}

//

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store: AppRootStateType = createStore(rootReducer);

