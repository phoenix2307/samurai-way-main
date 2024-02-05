import React, {FC} from "react";
import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {}
export const ProfileInfo: FC<ProfileInfoPropsType> = ({}) => {
    return (
        <div>
            <img
                src="https://st2.depositphotos.com/1003553/11729/i/950/depositphotos_117296254-stock-photo-flag-of-ukraine-painted-on.jpg"
                alt="my-avatar" />
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}