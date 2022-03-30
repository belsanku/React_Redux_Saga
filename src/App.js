import './App.css';
import React, {useEffect} from "react";
import {Route, Switch} from 'react-router-dom';
import NavBarComponent from "./components/NavBarComponent";
import LoginComponent from "./components/authentification/LoginComponent";
import FeedContainer from "./containers/FeedContainer"
import AuthLayoutComponent from "./layouts/AuthLayoutComponent";
import CommonLayoutComponent from "./layouts/CommonLayoutComponent";
import {useSelector} from "react-redux";
import {selectLogin} from "./ducks/app/selectors";
import {ArticleOverviewContainer} from "./containers/ArticleOverviewContainer";
import {PATH} from "./constants";
import RegistrationComponent from "./components/authentification/RegistrationComponent";
import {ArticleCreateNewComponent} from "./components/Articles/ArticleCreateNewComponent";

const fetchUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                username: 'Stranger'
            });
        }, 5000);
    });
};

function App() {
     const [user, setUser] = React.useState(null);
     const isAuthenticated = useSelector(selectLogin);

     useEffect(() => {
         async function fetchData() {
             const fetchedUser = await fetchUser();
             setUser(fetchedUser);
         }
         fetchData();
    }, []);

    return (
        <div>
            <NavBarComponent user={user}/>
                <Switch>
                    <AuthLayoutComponent
                        exact
                        path={PATH.LOGIN}
                        component={LoginComponent}
                        isAuthenticated={isAuthenticated}
                    />
                    <CommonLayoutComponent
                        exact
                        path={PATH.FEED}
                        component={FeedContainer}
                        isAuthenticated={isAuthenticated}
                    />
                    <CommonLayoutComponent
                        exact
                        path={PATH.ARTICLE + '/:id'}
                        component={ArticleOverviewContainer}
                        isAuthenticated={isAuthenticated}
                    />
                    <CommonLayoutComponent
                        exact
                        path={PATH.NEW_ARTICLE}
                        component={ArticleCreateNewComponent}
                        isAuthenticated={isAuthenticated}
                    />
                    <Route path={PATH.REGISTRATION} render={props => <RegistrationComponent {...props}/>}/>
                </Switch>
        </div>
    );
}

export default App;
