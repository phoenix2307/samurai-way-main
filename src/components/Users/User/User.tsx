import {FC} from "react";
import {UserType} from "../../../redux/usersReducer";
import s from './User.module.css'
import user1 from '../../../images/christian-buehner-DItYlc26zVI-unsplash.jpg'
import user2 from '../../../images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
import user3 from '../../../images/jake-nackos-IF9TK5Uy-KI-unsplash.jpg'
import user4 from '../../../images/leilani-angel-K84vnnzxmTQ-unsplash.jpg'

type UserPropsType = {
    id: string
    name: string
    ava: string
    status: string
    location: { country: string, city: string }
    followed: boolean
}

export const User: FC<UserPropsType> = ({...userData}) => {
    return (
        <div className={s.container}>
            <div className={s.avatarBlock}>
                <img src={user1} alt="" className={s.userAvatar}/>
                <button>{userData.followed ? 'FOLLOW' : 'UNFOLLOW'}</button>
            </div>

            <div className={s.textBlock}>
                <div>{userData.name}</div>
                <div>{userData.status}</div>
                <div>{userData.location}</div>
            </div>
        </div>
    )
}