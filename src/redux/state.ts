import {v1} from "uuid";

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
export type StateType = {
    profilePage: {
        postsData: PostType[],
        newTextPost: string
    }
    messagesPage: {
        dialogsData: DialogType[],
        messagesData: MessageType[]
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
export type ActionsType = AddPostActionType | ChangeTextPostActionType

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const changeTextPostAC = (changedValue: string) => {
    return{
        type: "CHANGE-TEXT-POST",
        changedValue: changedValue
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
        messagesPage: {
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
            ]

        },
        newsPage: {},
        musicPage: {},
        settingsPage: {}
    },

    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log('dfgdgd')
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsType) {

        switch (action.type) {

            case 'ADD-POST':
                let newPost: PostType = {
                    id: v1(),
                    postContent: this._state.profilePage.newTextPost,
                    likesCount: 0
                }
                this._state.profilePage.postsData.push(newPost)
                this._callSubscriber(this._state)
                this._state.profilePage.newTextPost = '';
                break

            case 'CHANGE-TEXT-POST':
                this._state.profilePage.newTextPost = action.changedValue
                this._callSubscriber(this._state)
                break
        }
    }
}
