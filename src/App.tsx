import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}

function App({state, dispatch, ...props}: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={'content'}>

                    <Route render={() =>
                        <Profile
                            postsData={state.profilePage.postsData}
                            dispatch={dispatch}
                            updatedTextPost={state.profilePage.newTextPost}
                        />}

                           path={'/profile'}/>

                    <Route render={() =>
                        <Dialogs
                            dialogsData={state.messagesPage.dialogsData}
                            messagesData={state.messagesPage.messagesData}/>}

                           path={'/dialogs'}/>

                    <Route render={() => <News/>} path={'/news'}/>
                    <Route render={() => <Music/>} path={'/music'}/>
                    <Route render={() => <Settings/>} path={'/settings'}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
