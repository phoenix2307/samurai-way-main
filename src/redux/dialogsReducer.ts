import {ActionsType, DialogsPageType} from "./state";
import {v1} from "uuid";

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
    switch (action.type){
        case "CHANGE-MESSAGE-TO-DIALOGS":
            state.newMessage = action.newMessage
            return state

        case "SEND-MESSAGE":
            let newMessageForSend = {
                id: v1(),
                messageText: state.newMessage
            }
            state.messagesData.push(newMessageForSend)
            state.newMessage = '';
            return state
        default: return state
    }

}