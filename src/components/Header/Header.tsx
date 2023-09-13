import React from "react";
import s from './Header.module.css'
import picture from '../../images/logo-eagle.png'


type HeaderPropsType = {}
export const Header = (props: HeaderPropsType) => {
    return(
        <>
            <header className={s.header}>
                <img src={picture} alt=""/>
            </header>
        </>
    )
}