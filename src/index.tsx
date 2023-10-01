import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter} from "react-router-dom";
import {App_Rx} from "./App_Rx";
import {AppRootStateType, store} from "./redux/redux-store";

// const rerenderEntireTreeForIndex = (state: StateType) => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App state={state} dispatch={store.dispatch.bind(store)}/>
//         </BrowserRouter>,
//         document.getElementById('root')
//     );
// }
//
// rerenderEntireTreeForIndex(store.getState());
//
// store.subscribe(rerenderEntireTreeForIndex)


// with Redux

const rerenderEntireTreeForIndex = (state: AppRootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App_Rx state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTreeForIndex(store.getState());

store.subscribe(()=>{
    rerenderEntireTreeForIndex(store.getState())
})
