



import React, { useContext, useEffect, useState } from 'react'
import LoginContext from '../store/login-context';
import { useNavigate } from 'react-router-dom';

function Login() {
const [login, setLogin] = useState('');
const [pwd, setPwd] = useState('');
const [formValid, setFormValid] = useState(false);
const navigate = useNavigate();

const logCtx = useContext(LoginContext);

useEffect(() => {
    setFormValid(pwd.length > 4);
}, [pwd])

console.log(formValid);

function loginHandler(e) {
    setLogin(e.target.value);
}

function pwdHandler(e) {
    setPwd(e.target.value);
}

function submitHandler(e) {
    e.preventDefault();
    if(logCtx.signin(login, pwd)) {
        navigate("/");
    }
    else {
        alert("Identifiants Erronés");
    }
}

  return (
    <form onSubmit={submitHandler}>
        <label htmlFor='login'>Login</label>
        <input className='form-control' id="login" onChange={loginHandler}></input>
        <label htmlFor='login'>Login</label>
        <input className='form-control' id="login" onChange={pwdHandler}></input>
        <br></br>
        <center>
            <button type="submit" disabled={!formValid} className='btn btn-primary'>Sign in</button>
        </center>
    </form>
  )
}

export default Login