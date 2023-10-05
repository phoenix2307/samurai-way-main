import React, {ChangeEvent, FC} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    changeMessageTextForDialogsAC,
    DialogsActionType, DialogsPageType,
    DialogType,
    MessageType,
    sendMessageAC
} from "../../redux/dialogsReducer";
import {ProfileActionType} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    updatedTextPost: string
    dispatch: (action: DialogsActionType | ProfileActionType) => void
}

// export const DialogsContainer: FC<DialogsPropsType> = ({
//                                                            dialogsData,
//                                                            messagesData,
//                                                            updatedTextPost,
//                                                            dispatch
//                                                        }) => {
//
//     const dialogList = dialogsData.map(dialog => <DialogItem key={dialog.id}
//                                                              id={dialog.id}
//                                                              name={dialog.name}/>)
//     const messagesList = messagesData
//         .map(message => <Message key={message.id} messageText={message.messageText}/>)
//
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         dispatch(changeMessageTextForDialogsAC(e.currentTarget.value))
//     }
//
//     const sendMessage = () => {
//         dispatch(sendMessageAC())
//     }
//
//     return (
//         <div className={s.dialogs}>
//             <div className={s.dialogsItems}>
//                 {dialogList}
//             </div>
//             <div className={s.messagesItems}>
//                 <div>{messagesList}</div>
//                 <div><textarea
//                     value={updatedTextPost}
//                     placeholder={'type your message'}
//                     onChange={onChangeHandler}
//                 ></textarea></div>
//                 <div>
//                     <button onClick={sendMessage}>SEND</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
///////////////////////////////////////
//
// type DispatchDialogsType = ReturnType<typeof mapDispatchToProps>
// type MapStateToPropsType = ReturnType<typeof mapStateToProps>
//
// const mapStateToProps = (state: DialogsPageType) => {
//     return {
//         dialogsData: state.dialogsData,
//         messagesData: state.messagesData,
//         newMessage: state.newMessage
//     }
// }
//
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         onChangeHandlerCB: (value: string) => dispatch(changeMessageTextForDialogsAC(value)),
//         sendMessageCB: () => dispatch(sendMessageAC())
//     }
// }
// export const DialogsContainer = connect<MapStateToPropsType, DispatchDialogsType>(mapStateToProps, mapDispatchToProps)(Dialogs)