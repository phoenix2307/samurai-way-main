import React, {ChangeEvent, FC} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessage: string
    onChangeHandlerCB: (value: string) => void
    sendMessageCB: () => void
}

export const Dialogs: FC<DialogsPropsType> = ({
                                                  dialogsData,
                                                  messagesData,
                                                  newMessage,
                                                  onChangeHandlerCB,
                                                  sendMessageCB

                                              }) => {

    const dialogList = dialogsData.map(dialog => <DialogItem key={dialog.id}
                                                             id={dialog.id}
                                                             name={dialog.name}/>)
    const messagesList = messagesData
        .map(message => <Message key={message.id} messageText={message.messageText}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeHandlerCB(e.currentTarget.value)
    }
    const sendMessage = () => {
        sendMessageCB()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogList}
            </div>
            <div className={s.messagesItems}>
                <div>{messagesList}</div>
                <div><textarea
                    value={newMessage}
                    placeholder={'type your message'}
                    onChange={onChangeHandler}
                ></textarea></div>
                <div>
                    <button onClick={sendMessage}>SEND</button>
                </div>
            </div>
        </div>
    )
}

