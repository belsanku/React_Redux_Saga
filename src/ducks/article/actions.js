import {articleActionTypes} from "./actionTypes";

export function createArticleAction(article) {
    return {
        type: articleActionTypes.CREATE_NEW_ARTICLE,
        article
    };
}

export function editArticle(article) {
    return {
        type: articleActionTypes.ARTICLE_EDIT,
        article
    };
}

export function fetchArticles() {
    return {
        type: articleActionTypes.FETCH_ARTICLES,
    }
}