import React, {useState} from "react";
import PropTypes from 'prop-types';
import {Button} from "reactstrap";
import {useDispatch} from "react-redux";
import {loginAction} from "../../ducks/app/actions";

const divStyle = {
  textAlign: 'center',
    margin: 'auto',
    boxSizing: 'border-box',
    padding: '20px'
};

function LoginComponent() {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handlerChange = (event) => {
        const target = event.target;
        const name = target.name;
        setFormData((prevState) => ({...prevState, [name]: event.target.value}));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(loginAction(formData));
    };

    return (
        <div style={divStyle}>
            <form onSubmit={submitHandler}>
                <label>
                    Login
                    <br/>
                    <input name="username" type="text" value={FormData.username} onChange={handlerChange}/>
                </label>
                <br/>
                <label>
                    Password
                    <br/>
                    <input name="password" type="password" value={FormData.password} onChange={handlerChange}/>
                </label>
                <br/>
                <Button className='btn-warning'>Login</Button>
            </form>
        </div>
    );
}

LoginComponent.propTypes = {
    login: PropTypes.func
};

export default LoginComponent;