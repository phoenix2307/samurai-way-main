import {ActionsType, DialogsPageType} from "./store";
import {v1} from "uuid";


const initialState = {
    dialogsData: [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Nika'},
        {id: v1(), name: 'Natalie'},
        {id: v1(), name: 'Artur'},
        {id: v1(), name: 'Oleg'}
    ],
    messagesData: [
        {id: v1(), messageText: 'Hi'},
        {id: v1(), messageText: 'How are you?'},
        {id: v1(), messageText: 'Fine'},
    ],
    newMessage: ''

}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
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