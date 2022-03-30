import PropTypes from 'prop-types';
import React from "react";

class ArticleOverviewClassComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
                <h4>Author : {this.props.author}</h4>
                <footer>Created at: {this.props.createdAt}</footer>
                <img src={this.props.imageUrl} alt="Here must be something"/>
            </div>
        );
    }
}

ArticleOverviewClassComponent.defaultProps = {
    title : 'Name of Article',
    content: 'Empty Content',
    author: 'Who?',
    user: { username: 'Stranger' },
    createdAt: 'No one knows',
    imageUrl: `https://dwweb.ru/__a-data/img/knopka.png`
};


ArticleOverviewClassComponent.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    user: PropTypes.shape({ username: PropTypes.string }),
    createdAt: PropTypes.string,
    imageUrl: PropTypes.string
}

export default ArticleOverviewClassComponent;