import {v1} from "uuid";

// let rerenderEntireTreeForState = (state: StateType) => {
//     console.log('dfgdgd')
// }

// export type StateType = typeof state
//
// export const state = {
//     profilePage: {
//         postsData: [
//             {id: v1(), postContent: 'Gloria to Ukraine', likesCount: 13},
//             {id: v1(), postContent: 'Gloria to heroes', likesCount: 12},
//             {id: v1(), postContent: 'Death for enemies', likesCount: 13},
//         ],
//         newTextPost: ''
//     },
//     messagesPage: {
//         dialogsData: [
//             {id: v1(), name: 'Alex'},
//             {id: v1(), name: 'Nika'},
//             {id: v1(), name: 'Natalie'},
//             {id: v1(), name: 'Artur'},
//             {id: v1(), name: 'Oleg'}
//         ],
//         messagesData: [
//             {id: v1(), messageText: 'Hi'},
//             {id: v1(), messageText: 'How are you?'},
//             {id: v1(), messageText: 'Fine'},
//         ]
//
//     },
//     newsPage: {},
//     musicPage: {},
//     settingsPage: {}
// }
//
// // Functions for event processing
//
// export const addNewPost = () => {
//     let newPost: PostType = {
//         id: v1(),
//         postContent: state.profilePage.newTextPost,
//         likesCount: 0
//     }
//     state.profilePage.postsData.push(newPost)
//     rerenderEntireTreeForState(state)
//     state.profilePage.newTextPost = ''
//
// }
//
// export const changeTextPost = (changedValue: string) => {
//     state.profilePage.newTextPost = changedValue
//     rerenderEntireTreeForState(state)
// }
//
// // Functions for rerender
//
// export const subscribe = (observer: (state:StateType) => void) => {
//     rerenderEntireTreeForState = observer
// }


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
    // addNewPost: () => void
    // changeTextPost: (changedValue: string) => void
    subscribe: (callback: (state: StateType) => void) => void
    dispatch: (action: ActionsType) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
}

type ChangeActionType = {
    type: 'CHANGE-TEXT-POST'
    changedValue: string
}
export type ActionsType = AddPostActionType | ChangeActionType

export const addPostAC = (): AddPostActionType => {
    return {
        type: "ADD-POST"
    }
}

export const changeTextPostAC = (changedValue: string): ChangeActionType => {
    return{
        type: "CHANGE-TEXT-POST",
        changedValue: changedValue
    }
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
    // addNewPost() {
    //     let newPost: PostType = {
    //         id: v1(),
    //         postContent: this._state.profilePage.newTextPost,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.postsData.push(newPost)
    //     this._callSubscriber(this._state)
    //     this._state.profilePage.newTextPost = ''
    // },
    // changeTextPost(changedValue: string) {
    //     this._state.profilePage.newTextPost = changedValue
    //     this._callSubscriber(this._state)
    // },
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
