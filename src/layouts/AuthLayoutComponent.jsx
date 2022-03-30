import {Redirect, Route} from "react-router-dom";
import {PATH} from "../constants";

const AuthLayoutComponent = ({
    component: Component,
    isAuthenticated,
    ...propsRest
}) => {
    if (isAuthenticated) {
        return <Redirect to={PATH.FEED}/>
    }

    return (
        <Route {...propsRest} render={props => {
            return (
                <Component {...props}/>
            );
        }}/>
    );
}

export default AuthLayoutComponent;