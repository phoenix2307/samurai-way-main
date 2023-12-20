import {FC, useState} from "react";
import s from './User.module.css'

type UserPropsType = {
    id: string
    name: string
    ava: string
    status: string
    location: { country: string, city: string }
    followed: boolean
    toggleFollowCB: (idUser: string) => void
    toggleUnFollowCB: (idUser: string) => void
}

export const User: FC<UserPropsType> = ({...userData}) => {
    const [followedStatus, setFollowedStatus] = useState(userData.followed)

    const onClickHandler = () => {
        const newFollowedStatus = !followedStatus
        setFollowedStatus(newFollowedStatus)
        newFollowedStatus
            ? userData.toggleFollowCB(userData.id)
            : userData.toggleUnFollowCB(userData.id)
    }

    return (
        <div className={s.container}>
            <div className={s.avatarBlock}>
                <img src={userData.ava} alt="" className={s.userAvatar}/>
                <button onClick={onClickHandler}>
                    {userData.followed ? 'FOLLOW' : 'UNFOLLOW'}
                </button>
            </div>

            <div className={s.textBlock}>
                <div>{userData.name}</div>
                <div>{userData.status}</div>
                <div>{userData.location.city}</div>
                <div>{userData.location.country}</div>
            </div>
        </div>
    )
}