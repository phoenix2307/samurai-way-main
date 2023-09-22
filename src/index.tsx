import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, store} from './redux/state'

const rerenderEntireTreeForIndex = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPostCallback={store.addNewPost.bind(store)}
            changeTextPost={store.changeTextPost.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTreeForIndex(store.getState());

store.subscribe(rerenderEntireTreeForIndex)
