import {useDispatch, useSelector} from "react-redux";
import {selectArticleById} from "../ducks/article/selectors";
import {useParams} from "react-router-dom";
import ArticleOverviewFuncComponent from "../components/Articles/ArticleOverviewFuncComponent";

export const ArticleOverviewContainer = () => {
    const {id} = useParams();
    const article = useSelector(state => selectArticleById(state, id));

    return <ArticleOverviewFuncComponent article={article}/>

};