import './index.css';
import { useState } from 'react';
import {login} from './utils';
import { Link, useNavigate} from 'react-router-dom';

const Login = () => {
const navigate = useNavigate();
const [username, SetUserName]= useState('');
const [password, SetPassword]= useState('');

console.log({username})

const handleLogin = async (event)=>{
    event.preventDefault();
    const result = await login({ username, password});
    navigate('./users')
    console.log({result});
};


return (
<div>
    <form onSubmit={handleLogin}>

<h2>Login</h2>
    <input placeholder="user name" type="text" onChange={(event)=> SetUserName(event.target.value)}/>
    <br/>
    <input placeholder="Enter Password" type="password" onChange={(event)=> SetPassword(event.target.value)}/>
    <br/>
    <Link to="/users"> <button type="submit">login</button></Link>

</form>
    </div>

 )
}
export default Login