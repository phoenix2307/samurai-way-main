import React from "react";
import s from './Header.module.css'


type HeaderPropsType = {}
export const Header = (props: HeaderPropsType) => {
    return(
        <>
            <header className={s.header}>
                <img src="https://png.pngtree.com/png-vector/20210224/ourmid/pngtree-head-eagle-mascot-esport-logo-vector-png-image_2947994.jpg"/>
                {/*<img src="../images/logo-eagle.png" alt="eagle"/>*/}
            </header>
        </>
    )
}