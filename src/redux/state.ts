import {v1} from "uuid";

let rerenderEntireTreeForState = (state: StateType) => {
    console.log('dfgdgd')
}
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

export type StateType = typeof state

export const state = {
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
}

// Functions for event processing

export const addNewPost = () => {
    let newPost: PostType = {
        id: v1(),
        postContent: state.profilePage.newTextPost,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    rerenderEntireTreeForState(state)
    state.profilePage.newTextPost = ''

}

export const changeTextPost = (changedValue: string) => {
    state.profilePage.newTextPost = changedValue
    rerenderEntireTreeForState(state)
}

// Functions for rerender

export const subscribe = (observer: (state:StateType) => void) => {
    rerenderEntireTreeForState = observer
}