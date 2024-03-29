import React, {FC} from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

type NavbarPropsType = {}

export const Navbar: FC<NavbarPropsType> = ({}) => {
    return (
        <>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to={"/profile"} activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/dialogs"} activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/news"} activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/music"} activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/settings"} activeClassName={s.activeLink}>Settings</NavLink>
                </div>
                <br/>
                <div className={s.item}>
                    <NavLink to={"/users"} activeClassName={s.activeLink}>Users</NavLink>
                </div>
            </nav>
        </>
    )
}