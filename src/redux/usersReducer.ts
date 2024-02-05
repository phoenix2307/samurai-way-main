import {v1} from "uuid";
import userIcon_1 from '../images/christian-buehner-DItYlc26zVI-unsplash.jpg'
import userIcon_2 from '../images/leilani-angel-K84vnnzxmTQ-unsplash.jpg'
import userIcon_3 from '../images/jake-nackos-IF9TK5Uy-KI-unsplash.jpg'

export type UserType = {
    id: string
    name: string
    ava: string
    status: string
    location: { country: string, city: string }
    followed: boolean
}

type UsersPageType = {
    usersData: UserType[]
}

type FollowACType = ReturnType<typeof followAC>
type UnFollowACType = ReturnType<typeof unFollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>
type UsersActionType = FollowACType | UnFollowACType | SetUsersType

const initialState = {
    usersData: [
        {
            id: v1(),
            name: 'Alex',
            ava: userIcon_1,
            status: 'father',
            location: {
                country: 'Ukraine', city: 'Chernivci'
            },
            followed: true
        },
        {
            id: v1(),
            name: 'Natalie',
            ava: userIcon_2,
            status: 'mother',
            location: {country: 'Ukraine', city: 'Chernivci'},
            followed: true
        },
        {
            id: v1(),
            name: 'Nika',
            ava: userIcon_3,
            status: 'daughter',
            location: {country: 'Ukraine', city: 'Chernivci'},
            followed: true
        },
    ]
}

export const usersReducer = (state: UsersPageType = initialState,
                             action: UsersActionType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, usersData: state.usersData.map( user => user.id === action.id ? {...user, followed: true} : user )}

        case 'UNFOLLOW':
            return {...state, usersData: state.usersData.map( user => user.id === action.id ? {...user, followed: false} : user )}

        case 'SET_USERS':
            return {...state, usersData: [...state.usersData, ...action.newUsers]}

        default:
            return state
    }
}

export const followAC = (idUser: string) => {
    return {
        type: 'FOLLOW',
        id: idUser
    } as const
}
export const unFollowAC = (idUser: string) => {
    return {
        type: 'UNFOLLOW',
        id: idUser
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        newUsers: users
    } as const
}