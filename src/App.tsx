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
import {StateType} from "./redux/state";

//
// export type DialogType = {
//     id: string
//     name: string
// }
// export type MessageType = {
//     id: string
//     messageText: string
// }
// export type PostType = {
//     id: string
//     postContent: string
//     likesCount: number
// }//
// const dialogsData = [
//     {id: '1', name: 'Alex'},
//     {id: '2', name: 'Nika'},
//     {id: '3', name: 'Natalie'},
//     {id: '4', name: 'Artur'},
//     {id: '5', name: 'Oleg'}
// ]
//
// const messagesData = [
//     {id: '1', messageText: 'Hi'},
//     {id: '2', messageText: 'How are you?'},
//     {id: '3', messageText: 'Fine'},
// ]
//
// const postsData = [
//     {id: '1', postContent: 'Gloria to Ukraine', likesCount: 13},
//     {id: '2', postContent: 'Gloria to heroes', likesCount: 12},
//     {id: '3', postContent: 'Death for enemies', likesCount: 13},
// ]

type AppPropsType = {
    state: StateType
    addPostCallback: (newPost: string) => void
}

function App({state, addPostCallback, ...props}: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={'content'}>
                    <Route render={() =>
                        <Profile
                            postsData={state.profilePage.postsData}
                            addPostCallback={addPostCallback}/>} path={'/profile'}/>
                    <Route render={() =>
                        <Dialogs
                            dialogsData={state.messagesPage.dialogsData}
                            messagesData={state.messagesPage.messagesData}/>} path={'/dialogs'}/>
                    <Route render={() => <News/>} path={'/news'}/>
                    <Route render={() => <Music/>} path={'/music'}/>
                    <Route render={() => <Settings/>} path={'/settings'}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
