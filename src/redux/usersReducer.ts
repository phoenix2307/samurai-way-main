import {v1} from "uuid";

export type UserType = {
    id: string
    name: string
    status: string
    location: { country: string, city: string }
    followed: boolean
}

type UsersPageType = {
    usersData: UserType[]
}

type FollowAC = ReturnType<typeof followAC>
type UnFollowAC = ReturnType<typeof unFollowAC>
type UsersActionType = FollowAC | UnFollowAC

const initialState = {
    usersData: [
        {
            id: v1(),
            name: 'Alex',
            status: 'father',
            location: {
                country: 'Ukraine', city: 'Chernivci'
            },
            followed: true
        },
        {
            id: v1(),
            name: 'Natalie',
            status: 'mother',
            location: {country: 'Ukraine', city: 'Chernivci'},
            followed: true
        },
        {
            id: v1(),
            name: 'Nika',
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

        default:
            return state
    }
}

const followAC = (idUser: string) => {
    return {
        type: 'FOLLOW',
        id: idUser
    } as const
}
const unFollowAC = (idUser: string) => {
    return {
        type: 'UNFOLLOW',
        id: idUser
    } as const
}