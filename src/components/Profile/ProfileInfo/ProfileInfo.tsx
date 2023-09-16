import React from "react";
import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {}
export const ProfileInfo = ({}: ProfileInfoPropsType)=>{
    return(
        <>
            <img
                src="https://st2.depositphotos.com/1003553/11729/i/950/depositphotos_117296254-stock-photo-flag-of-ukraine-painted-on.jpg"
                alt=""/>
            {/*<img src="/images/11.jpg" alt="for content"/>*/}
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </>
    )
}