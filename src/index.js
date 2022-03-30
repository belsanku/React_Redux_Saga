import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {history, store} from "./store";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <React.StrictMode>
                <App/>,
            </React.StrictMode>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)


reportWebVitals();
