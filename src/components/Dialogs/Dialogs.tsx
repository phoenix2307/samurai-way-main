import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsPropsType = {}

type DialogItemPropsType = {
    id: string
    name: string
}
const DialogItem = ({id, name}: DialogItemPropsType)=>{
    const path = `/dialogs/+${id}`
    return(

            <div className={s.dialogsItem}>
                <NavLink to={path} activeClassName={s.activeDialog} >{name}</NavLink>
            </div>
    )
}

type MessagePropsType = {
    messageText: string
}
const Message = ({messageText}:MessagePropsType)=> {
    return (
        <div className={s.messagesItem}>{messageText}</div>
    )
}

export const Dialogs = ({}: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={'1'} name={'Alex'}/>
                <DialogItem id={'2'} name={'Nika'}/>
                <DialogItem id={'3'} name={'Natalie'}/>
                <DialogItem id={'4'} name={'Artur'}/>
                <DialogItem id={'5'} name={'Oleg'}/>

            </div>
            <div className={s.messagesItems}>
                <Message messageText={'Hi'}/>
                <Message messageText={'How are you?'}/>
                <Message messageText={'Fine'}/>
            </div>
        </div>
    )
}