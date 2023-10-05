import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {AppRootStateType, store} from "./redux/redux-store";
import {Provider} from "react-redux";

// with Redux

// const rerenderEntireTreeForIndex = (state: AppRootStateType) => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
//             </Provider>
//         </BrowserRouter>,
//         document.getElementById('root')
//     );
// }
//
// rerenderEntireTreeForIndex(store.getState());
//
// store.subscribe(() => {
//     rerenderEntireTreeForIndex(store.getState())
// })


//
const rerenderEntireTreeForIndex = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTreeForIndex();

store.subscribe(() => {
    rerenderEntireTreeForIndex()
})
