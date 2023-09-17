import {v1} from "uuid";
import {rerenderEntireTree} from "../render";

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    messageText: string
}
//dialogsData -> DialogType[]
//messagesData -> MessageType[]

export type PostType = {
    id: string
    postContent: string
    likesCount: number
}
// postsData -> PostType[]


// export type StateType = {
//     profilePage: { postsData: PostType[] }
//     messagesPage: {
//         dialogsData: DialogType[],
//         messagesData: MessageType[]
//     }
//     newsPage: any
//     musicPage: any
//     settingsPage: any
// }

export type StateType = typeof state

export const state = {
    profilePage: {
        postsData: [
            {id: '1', postContent: 'Gloria to Ukraine', likesCount: 13},
            {id: '2', postContent: 'Gloria to heroes', likesCount: 12},
            {id: '3', postContent: 'Death for enemies', likesCount: 13},
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: '1', name: 'Alex'},
            {id: '2', name: 'Nika'},
            {id: '3', name: 'Natalie'},
            {id: '4', name: 'Artur'},
            {id: '5', name: 'Oleg'}
        ],
        messagesData: [
            {id: '1', messageText: 'Hi'},
            {id: '2', messageText: 'How are you?'},
            {id: '3', messageText: 'Fine'},
        ]

    },
    newsPage: {},
    musicPage: {},
    settingsPage: {}
}

export const addNewPost = (textNewPost: string) => {
    let newPost: PostType = {
        id: v1(),
        postContent: textNewPost,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    rerenderEntireTree(state)
}