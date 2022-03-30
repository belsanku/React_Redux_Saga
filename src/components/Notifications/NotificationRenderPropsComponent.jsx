import React from "react";
import PropTypes from "prop-types";

const notificationStyle = {
    width: '200px',
    height: 'auto',
    backgroundColor: '#808080',
    position: 'absolute',
    bottom: '10px',
    right: '10px'
};

export default function NotificationRenderPropsComponent({children, renderButtons})
{
    return (
        <div style={notificationStyle}>
            {children}
            {renderButtons()}
        </div>
    );
}

NotificationRenderPropsComponent.propTypes = {
    renderButtons: PropTypes.func
}