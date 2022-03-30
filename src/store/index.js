import {createStore, applyMiddleware} from "redux";
import createRootReducer from "./rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {createBrowserHistory} from 'history'
import {routerMiddleware} from "connected-react-router";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    routerMiddleware(history),
    sagaMiddleware
];

export const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            ...middlewares,
        ),
    )
);

sagaMiddleware.run(rootSaga);