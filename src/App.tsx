import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className={'content'}>
                    <Route component={Dialogs} path={'/dialogs'}/>
                    <Route component={Profile} path={'/profile'}/>
                    {/*<Profile/>*/}
                    {/*<Dialogs/>*/}
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
