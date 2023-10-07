import React from "react";

import {
    changeMessageTextForDialogsAC,
    DialogType,
    MessageType,
    sendMessageAC
} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppDispatch, AppRootStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessage: string
}
type MapDispatchPropsType = {
    onChangeHandlerCB: (value: string) => void
    sendMessageCB: () => void
}


const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessage: state.dialogsPage.newMessage
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchPropsType => {
    return {
        onChangeHandlerCB: (value: string) => dispatch(changeMessageTextForDialogsAC(value)),
        sendMessageCB: () => dispatch(sendMessageAC())
    }
}


export const DialogsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(Dialogs)



