import {useState} from "react";

export function Login({onSubmit}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onFormSubmit(event) {
        event.preventDefault();
        onSubmit({
            username,
            password
        })
    }

    function onUsernameChange(event) {
        setUsername(event.target.value)
    }

    function onPasswordChange(event) {
        setPassword(event.target.value)
    }

    // return <form onSubmit={onFormSubmit}>
    //     <input onChange={onUsernameChange} value={username} type={'text'} placeholder={"username"}/>
    //     <input onChange={onPasswordChange} value={password} type={'password'} placeholder={"password"}/>
    //     <button> Login</button>
    // </form>


    return <>
        {
            [1, 2, 3]
        }
    </>
}