import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const dialogsData = [
    {id: '1', name: 'Alex'},
    {id: '2', name: 'Nika'},
    {id: '3', name: 'Natalie'},
    {id: '4', name: 'Artur'},
    {id: '5', name: 'Oleg'}
]

const messagesData = [
    {id: '1', messageText: 'Hi'},
    {id: '2', messageText: 'How are you?'},
    {id: '3', messageText: 'Fine'},
]

const dialogList = dialogsData
    .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

const messagesList = messagesData
    .map(message=><Message messageText={message.messageText}/>)
type DialogsPropsType = {}

export const Dialogs = ({...props}: DialogsPropsType) => {
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