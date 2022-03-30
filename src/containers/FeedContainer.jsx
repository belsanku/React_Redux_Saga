import FeedComponent from "../components/FeedComponent";
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {selectArticles} from "../ducks/article/selectors";
import {fetchArticles} from "../ducks/article/actions";

function FeedContainer() {
    const articles = useSelector(selectArticles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles())
    }, []);

    return <FeedComponent articles={articles}/>
}

FeedContainer.propTypes = {
  fetchArticles: PropTypes.func
};

export default FeedContainer;