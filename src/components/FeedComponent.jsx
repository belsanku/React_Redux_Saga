import React from "react";
import ArticleFeedItemComponent from "./Articles/ArticleFeedItemComponent";

function FeedComponent({articles}) {
    return (
        <div>
            {articles.length
                ? articles.map(article => <ArticleFeedItemComponent key = {article.id} article={article}/>)
                : 'No items'}
        </div>
    );
}



export default FeedComponent;