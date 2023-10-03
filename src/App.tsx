import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {AppRootStateType} from "./redux/redux-store";
import {DialogsActionType} from "./redux/dialogsReducer";
import {ProfileActionType} from "./redux/profileReducer";

type AppPropsType = {
    state: AppRootStateType
    dispatch: (action: DialogsActionType | ProfileActionType) => void
}

export const App: FC<AppPropsType> = ({
                                          state,
                                          dispatch
                                      }) => {

    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={'content'}>

                <Route render={() =>
                    <Profile
                        postsData={state.profilePage.postsData}
                        updatedTextPost={state.profilePage.newTextPost}
                        dispatch={dispatch}
                    />}
                       path={'/profile'}/>

                <Route render={() =>
                    <Dialogs
                        dialogsData={state.dialogsPage.dialogsData}
                        messagesData={state.dialogsPage.messagesData}
                        updatedTextPost={state.dialogsPage.newMessage}
                        dispatch={dispatch}
                    />}
                       path={'/dialogs'}/>

                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
            </div>
        </div>
    );
}

