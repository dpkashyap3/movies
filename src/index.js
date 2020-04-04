import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./Redux/Reducers"

const store=createStore(rootReducer)

ReactDOM.render(<Provider store={store}>
                <App />
                </Provider>, document.getElementById('root',window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


