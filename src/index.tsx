import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store} from './redux/store'
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTreeForIndex = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTreeForIndex(store.getState());

store.subscribe(rerenderEntireTreeForIndex)
