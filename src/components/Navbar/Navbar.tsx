import React from "react";
import s from './Navbar.module.css'

type NavbarPropsType = {}

export const Navbar = (props: NavbarPropsType) => {
    const classActive = `${s.item} ${s.active}`
    return(
        <>
            <nav className={s.nav}>
                <div className={classActive}>
                    <a href="src/components#">Profile</a>
                </div>
                <div className={s.item}>
                    <a href="src/components#">Messages</a>
                </div>
                <div className={s.item}>
                    <a href="src/components#">Music</a>
                </div>
                <div className={s.item}>
                    <a href="src/components#">Settings</a>
                </div>
            </nav>
        </>
    )
}