import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

type ProfilePropsType = {}
export const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <div className={s.profile}>
                <img
                    src="https://st2.depositphotos.com/1003553/11729/i/950/depositphotos_117296254-stock-photo-flag-of-ukraine-painted-on.jpg"
                    alt=""/>
                {/*<img src="/images/11.jpg" alt="for content"/>*/}
                <div>
                    ava + description
                </div>
                <MyPosts/>
            </div>
        </>
    )
}