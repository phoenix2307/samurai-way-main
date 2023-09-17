import React from "react";
import s from './Message.module.css'

type MessagePropsType = {
    messageText: string
}
export const Message = ({messageText, ...props}:MessagePropsType)=> {
    return (
        <div className={s.messagesItem}>{messageText}</div>
    )
}