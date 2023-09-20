import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, changeTextPost, state, StateType, subscribe} from './redux/state'

const rerenderEntireTreeForIndex = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPostCallback={addNewPost}
            changeTextPost={changeTextPost}/>,
        document.getElementById('root')
    );
}

rerenderEntireTreeForIndex(state);

subscribe(rerenderEntireTreeForIndex)
