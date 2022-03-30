import React from "react";
import {
    Button, NavLink
} from "reactstrap";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {PATH} from "../../constants";
import {contentStyle, divStyle, hStyle, imgStyle} from "../../styles/FeedItemStyle";

function ArticleFeedItemComponent({article}) {
    const {id, title, content, author, createdAt, imageUrl} = article;
    const sliced =  content.length > 150 ? content.slice(0, 150) + '...' : content;

    const ButtonMore =
        <Link to={`${PATH.ARTICLE}/${id}`}>
            <NavLink>
                <Button className='btn-danger'>
                    More
                </Button>
            </NavLink>
        </Link>;

    return (
        <div style={divStyle}>
            <h2 style={hStyle}>{title}</h2>
            <img style={imgStyle} src={imageUrl} alt="Here must be something"/>
            <p style={contentStyle}>{sliced}</p>
            <footer style={contentStyle}>Created at: {createdAt}</footer>
            {ButtonMore}
        </div>
    );
}

ArticleFeedItemComponent.defaultProps = {
    article : {
        title : 'Name of Article',
        content: 'Empty Content',
        author: 'Who cares',
        createdAt: 'No one knows',
        imageUrl: `https://dwweb.ru/__a-data/img/knopka.png`
    }
};


ArticleFeedItemComponent.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string,
        createdAt: PropTypes.string,
        imageUrl: PropTypes.string
    }),
}

export  default ArticleFeedItemComponent;