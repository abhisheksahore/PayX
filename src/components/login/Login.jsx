import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/userContext';
import './Login.css';
import validator from 'validator'

const Login = () => {
    const userContext = useContext(UserContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const login = () => {
        setError('')
        let errorMessage = '';
        if (email === '' || !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase()) || !validator.isEmail(email) ) {
            errorMessage += ' ' + 'Put a valid email.\n'; 
        }  if (password === '' || password.length < 6) {
            errorMessage += ' ' + "Put a valid password.\n";
        }

        console.log(errorMessage);
        if (errorMessage === "") {
            let userData = localStorage.getItem(email);
            if (userData) {
                userData = userData.split(',');
                if (email === userData[0] && password === userData[2]) {
                    userContext.setUserData(userData);
                    localStorage.setItem('loggedInUser', userData);
                    navigate('/');
                } else {
                    setError(prev => "Incorrect password.\n")
                } 
            } else {
                setError( prev => prev + " " + 'Incorrect email.\n')
            }
        } else {
            setError(prev => errorMessage)
        }
    }

  return (
    <div className='login-container'>
        <div className="login-wrapper">
            <div className='logo login-logo'>PAY<span>X</span></div>
            <div className='login-form'>
                <div>
                    <p>Email</p> 
                    <input type="text" placeholder='email'  onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div className='login-btn' onClick={login}>Login</div>
                <pre style={{color: 'red', fontWeight: "700", fontSize: '1rem', fontFamily: "Ubuntu", lineHeight: '1.5rem', letterSpacing: "1px"}}>{error}</pre>
            </div>
            <div className='signup-instead'>New to our platform? &nbsp; <Link style={{textDecoration: "none"}}  to="/signup"><span>Create an account</span></Link></div>
        </div>
    </div>
  )
}

export default Login