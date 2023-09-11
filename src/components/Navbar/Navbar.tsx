import React from "react";
import s from './Navbar.module.css'

type NavbarPropsType = {}

export const Navbar = (props: NavbarPropsType) => {
    const classActive = `${s.item} ${s.active}`
    return(
        <>
            <nav className={s.nav}>
                <div className={classActive}>
                    <a href="/profile">Profile</a>
                </div>
                <div className={s.item}>
                    <a href="/dialogs">Messages</a>
                </div>
                <div className={s.item}>
                    <a href="/news">News</a>
                </div>
                <div className={s.item}>
                    <a href="/music">Music</a>
                </div>
                <div className={s.item}>
                    <a href="/settings">Settings</a>
                </div>
            </nav>
        </>
    )
}