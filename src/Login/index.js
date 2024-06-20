import './index.css';
import { useState } from 'react';
import {login} from './utils';

const Login = () => {

const [username, SetUserName]= useState('');
const [password, SetPassword]= useState('');

console.log({username})
const handleLogin = async (event)=>{
    event.preventDefault();
    const result = await login({ username, password});
    console.log(result)
}

// const display = users.array.forEach(element => {
//     console.log(element)
// });

    return (
<div>
<form onSubmit={handleLogin}>
<h2>Login</h2>
    <input placeholder="user name" type="text" onChange={(event)=> SetUserName(event.target.value)}/>
    <br/>
    <input placeholder="Enter Password" type="text" onChange={(event)=> SetPassword(event.target.value)}/>
    <br/>
<button type="submit">
    login
</button>
</form>
</div>

 )
}
export default Login