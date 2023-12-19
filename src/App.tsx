import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";


type AppPropsType = {}

export const App: FC<AppPropsType> = () => {

    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <div className={'content'}>
                <Route render={() => <Profile/>} path={'/profile'}/>
                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
                <Route render={() => <Users/>} path={'/users'}/>
            </div>
        </div>
    );
}

