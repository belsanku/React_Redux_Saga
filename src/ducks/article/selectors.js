//import {createSelector} from "reselect";

export const selectArticles = (state) => state.articles;
//٩(｡•́‿•̀｡)۶

export const selectArticleById = (state, id) =>
    state.articles.find(item => String(item.id) === id);