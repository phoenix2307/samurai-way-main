import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/redux";


type DialogsPropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
}

export const Dialogs = ({dialogsData, messagesData, ...props}: DialogsPropsType) => {
    const dialogList = dialogsData
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    const messagesList = messagesData
        .map(message=><Message messageText={message.messageText}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogList}
            </div>
            <div className={s.messagesItems}>
                {messagesList}
            </div>
        </div>
    )
}