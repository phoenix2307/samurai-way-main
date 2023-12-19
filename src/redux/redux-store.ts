import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

// export type AppDispatch = Dispatch<ProfileActionType | DialogsActionType>

// export type StoreType =  Store<EmptyObject
//     & AppRootStateType,
//     ProfileActionType | DialogsActionType>

export const store = createStore(rootReducer);

