import PropTypes from 'prop-types';
import React, {useRef} from "react";
import {setUsernameAction} from "../../ducks/app/actions";
import {store} from "../../store";
import {contentStyle, divStyle, hStyle} from "../../styles/FeedItemStyle";

function ArticleOverviewFuncComponent({article}) {
    ///Старое, но, возможно, понадобится (решить что с ним делать)
    const inputEl = useRef(null);
    const buttonClickHandler = () => {
        const username = inputEl.current.value;
        store.dispatch(setUsernameAction(username));
    }
    ///

    return (
        <div style={divStyle}>
            <h1 style={hStyle}>{article.title}</h1>
            <p style={contentStyle}>{article.content}</p>
            <h4 style={hStyle}>Author: {article.author}</h4>
            <footer style={contentStyle}>Created at: {article.createdAt}</footer>
            <img src={article.imageUrl} alt="Here must be something"/>

            <br/>

            <input type="text" ref={inputEl}/>
            <button onClick={buttonClickHandler}>Click me</button>
            {store.getState().app.username}

        </div>
    );
}

ArticleOverviewFuncComponent.defaultProps = {
    title: 'Name of Article',
    content: 'Empty Content',
    author: 'Who?',
    createdAt: 'No one knows',
    imageUrl: 'https://dwweb.ru/__a-data/img/knopka.png'
};

ArticleOverviewFuncComponent.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    createdAt: PropTypes.string,
    imageUrl: PropTypes.string
}

export default ArticleOverviewFuncComponent;
