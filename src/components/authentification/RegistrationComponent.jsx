import {Button} from "reactstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerAction} from "../../ducks/app/actions";

const divStyle = {
    textAlign: 'center',
    margin: 'auto',
    boxSizing: 'border-box',
    padding: '20px'
};

export default function RegistrationComponent(props) {

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


    const formSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(registerAction(formData));
    };

    return (
        <div style={divStyle}>
            <form onSubmit={formSubmitHandler}>
                    Please, enter your login:<br/>
                <input name='username' type='text' size='40' value={FormData.username} onChange={handlerChange}/><br/>
                    Now, password:<br/>
                <input name='password' type ='text' size='40' value={FormData.password} onChange={handlerChange}/><br/>
                    Repeat password:<br/>
                <input type='text' size='40'/><br/>
                <Button type={"submit"}>LET'S ROCK!</Button>
            </form>
        </div>
    );
}