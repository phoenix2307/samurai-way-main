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
import {AppRootStateType, StoreType} from "./redux/redux-store";
import {DialogsActionType, DialogsPageType} from "./redux/dialogsReducer";
import {ProfileActionType, ProfilePageType} from "./redux/profileReducer";
import {EmptyObject, Store} from "redux";

type AppPropsType = {
    // state: AppRootStateType
    // dispatch: (action: DialogsActionType | ProfileActionType) => void
    // store: StoreType

}


export const App: FC<AppPropsType> = ({
                                          // state,
                                          // dispatch,
                                          // store
                                      }) => {

    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={'content'}>

                <Route render={() =>
                    <Profile
                        // store={store}
                        // postsData={state.profilePage.postsData}
                        // updatedTextPost={state.profilePage.newTextPost}
                        // dispatch={dispatch}
                    />}
                       path={'/profile'}/>

                {/*<Route render={() =>*/}
                {/*    <Dialogs*/}
                {/*        dialogsData={state.dialogsPage.dialogsData}*/}
                {/*        messagesData={state.dialogsPage.messagesData}*/}
                {/*        newMessage={state.dialogsPage.newMessage}*/}
                {/*        dispatch={dispatch}*/}
                {/*    />}*/}
                {/*       path={'/dialogs'}/>*/}

                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
            </div>
        </div>
    );
}

