import {NavLink} from "react-router-dom";
import React from "react";
import s from './DialogItem.module.css'

type DialogItemPropsType = {
    id: string
    name: string
}
export const DialogItem = ({id, name}: DialogItemPropsType)=>{
    const path = `/dialogs/${id}`
    return(

        <div className={s.dialogsItem}>
            <NavLink to={path} activeClassName={s.activeDialog} >{name}</NavLink>
        </div>
    )
}