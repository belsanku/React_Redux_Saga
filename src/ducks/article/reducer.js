import {articleActionTypes} from "./actionTypes";
import {articles} from "../../mockedData";

const initialState = [];

export const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case articleActionTypes.CREATE_NEW_ARTICLE:
            return articles.push({
                ...action.article,
                id: Date.now(), // (＠＾◡＾)
                createdAt: String(new Date()),
                user: action.username
                },
            );
        case articleActionTypes.FETCH_ARTICLES:
            return articles;

        case articleActionTypes.ARTICLE_EDIT:
            return state.map(articleItem => {
                if(articleItem.id === action.article.id) {
                    return action.article;
                }
            })

        default:
            return state;
    }
};