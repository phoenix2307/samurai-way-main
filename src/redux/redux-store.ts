import {combineReducers, createStore, Dispatch, EmptyObject, Store} from "redux";
import {ProfileActionType, ProfilePageType, profileReducer} from "./profileReducer";
import {DialogsActionType, DialogsPageType, dialogsReducer} from "./dialogsReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = Dispatch<ProfileActionType | DialogsActionType>

export type StoreType =  Store<EmptyObject
    // & {profilePage: ProfilePageType, dialogsPage: DialogsPageType},
    & AppRootStateType,
    ProfileActionType | DialogsActionType>

export const store = createStore(rootReducer);

