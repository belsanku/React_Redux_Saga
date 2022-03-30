import {combineReducers} from 'redux';
import {appReducer} from "../ducks/app/reducer";
import {articleReducer} from "../ducks/article/reducer";
import {connectRouter} from "connected-react-router";

export default (history) => combineReducers({
    router: connectRouter(history),
    app: appReducer,
    articles: articleReducer
});