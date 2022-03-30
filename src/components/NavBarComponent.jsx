import React from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {
    Button,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem, NavLink
} from "reactstrap";
import PropTypes from "prop-types";
import {logoutAction} from "../ducks/app/actions";
import {selectLogin, selectUsername} from "../ducks/app/selectors";
import {PATH} from '../constants';

function NavBarComponent(props) {

    const currentState = useSelector(selectLogin);
    const dispatch = useDispatch();
    const currentUsername = useSelector(selectUsername);

    const handleLogoutClick = () => {
        dispatch(logoutAction());
    };

    const CreateNewArticleButton = <Link to={PATH.NEW_ARTICLE}><Button>Add article</Button></Link>;

    const LoginButton = currentState
        ? <NavLink><Button className="btn-warning" onClick={handleLogoutClick}>Logout</Button></NavLink>
        : <Link to={PATH.LOGIN}><Button className="btn-danger">Sign In</Button></Link>;

    const RegistrationButton = <Link to='/registration'><Button className="btn-warning">Sign Up</Button></Link>;

    return (
        <Navbar color="light" light>
            <Link to={PATH.FEED}>
                <NavbarBrand className="text-decoration-underline">
                    PrivetApp
                </NavbarBrand>
            </Link>
            <Nav className="ml-auto" navbar>
                <NavItem className="text-secondary navbar-text">
                    <Link to={PATH.FEED}>
                        Feed
                    </Link>
                </NavItem>
                {
                    currentState
                    ? <NavItem className="text-secondary navbar-text">{currentUsername}</NavItem>
                    : <NavItem className="text-secondary navbar-text">{props.user?.username}</NavItem>
                }

                {LoginButton}
                {RegistrationButton}
                { currentState ? CreateNewArticleButton : null}
            </Nav>
        </Navbar>
    );
}

NavBarComponent.propTypes = {
    user: PropTypes.shape({username: PropTypes.string})
}

export default NavBarComponent;