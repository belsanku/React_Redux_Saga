import {Redirect, Route} from "react-router-dom";
import {PATH} from "../constants";

const CommonLayoutComponent = ({
     component: Component,
     isAuthenticated,
     ...propsRest
}) => {

    if (!isAuthenticated) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <Route {...propsRest} render={props => {
            return (
                <Component {...props}/>
            );
        }}/>
    );
}

export default CommonLayoutComponent;