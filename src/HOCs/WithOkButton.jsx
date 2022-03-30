import React from "react";

export default function WithOkButton(WrappedComponent) {
    const NewComponent = ({ buttons = [], ...props }) => {
        const button = <button key='1' onClick={() => console.log('dismiss')}>dismiss</button>;
        return (
            <WrappedComponent buttons={[button, ...buttons]} {...props} />
        );
    }
    return NewComponent;
}