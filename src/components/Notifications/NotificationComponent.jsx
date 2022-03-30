import React, {useEffect} from "react";

const notificationStyle = {
    width: '200px',
    height: 'auto',
    backgroundColor: '#808080',
    position: 'absolute',
    bottom: '10px',
    right: '10px'
};



function NotificationComponent({children, buttons}) {
    return (
        <div style={notificationStyle}>
            {children}
            {buttons}
        </div>
    );
}

export default NotificationComponent;