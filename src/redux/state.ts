import {v1} from "uuid";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

// Store
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

type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeTextPostActionType = ReturnType<typeof changeTextPostAC>
type ChangeMessageTextActionType = ReturnType<typeof changeMessageTextForDialogsAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>

export type ActionsType = AddPostActionType
    | ChangeTextPostActionType
    | ChangeMessageTextActionType
    | SendMessageActionType

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

export const changeMessageTextForDialogsAC = (newMessage: string) => {
    return {
        type: 'CHANGE-MESSAGE-TO-DIALOGS',
        newMessage: newMessage
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const

}

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), postContent: 'Gloria to Ukraine', likesCount: 13},
                {id: v1(), postContent: 'Gloria to heroes', likesCount: 12},
                {id: v1(), postContent: 'Death for enemies', likesCount: 13},
            ],
            newTextPost: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: v1(), name: 'Alex'},
                {id: v1(), name: 'Nika'},
                {id: v1(), name: 'Natalie'},
                {id: v1(), name: 'Artur'},
                {id: v1(), name: 'Oleg'}
            ],
            messagesData: [
                {id: v1(), messageText: 'Hi'},
                {id: v1(), messageText: 'How are you?'},
                {id: v1(), messageText: 'Fine'},
            ],
            newMessage: ''

        },
        newsPage: {},
        musicPage: {},
        settingsPage: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log('plug')
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)!;
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)!;
        this._callSubscriber(this._state)

        // switch (action.type) {
        //     case 'ADD-POST':
        //         let newPost: PostType = {
        //             id: v1(),
        //             postContent: this._state.profilePage.newTextPost,
        //             likesCount: 0
        //         }
        //         this._state.profilePage.postsData.push(newPost)
        //         this._callSubscriber(this._state)
        //         this._state.profilePage.newTextPost = '';
        //         break
        //
        //     case 'CHANGE-TEXT-POST':
        //         this._state.profilePage.newTextPost = action.changedValue
        //         this._callSubscriber(this._state)
        //         break
        //
        //     case "CHANGE-MESSAGE-TO-DIALOGS":
        //         this._state.dialogsPage.newMessage = action.newMessage
        //         this._callSubscriber(this._state)
        //         break
        //
        //     case "SEND-MESSAGE":
        //         let newMessageForSend = {
        //             id: v1(),
        //             messageText: this._state.dialogsPage.newMessage
        //         }
        //         this._state.dialogsPage.messagesData.push(newMessageForSend)
        //         this._callSubscriber(this._state)
        //         this._state.dialogsPage.newMessage = '';
        //         break
        // }

    }
}
