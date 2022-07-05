import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../context/userContext';
import validator from 'validator';

const Signup = () => {

    const userContext =  useContext(UserContext);

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const signup = () => {
        setError(prev => '')
        let errorMessage = '';
        console.log(validator.isAlpha(name, 'en-US', {ignore: ' '}))
        if (name === '' || !validator.isAlpha(name,  'en-US', {ignore: ' '})) {
            errorMessage += ' ' + "Put a valid name.\n";
        } if (email === '' || !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase()) || !validator.isEmail(email)) {
            errorMessage += ' ' + 'Put a valid email.\n';
        }  if (password === '' || password.length < 6 || password.includes(',')) {
            errorMessage += ' ' + "Put a valid password.\n";
        }
        
        if (errorMessage === '') {
            const emailExists = localStorage.getItem(email);
            if (emailExists) {
                setError(prev => "Email already exists.");
            } else {
                localStorage.setItem(email, `${email.trim()},${name.trim()},${password.trim()}`)
                localStorage.setItem('loggedInUser', `${email.trim()},${name.trim()},${password.trim()}`.split(','))
                userContext.setUserData(`${email.trim()},${name.trim()},${password.trim()}`.split(','));
                navigate('/');
            }
        } else {
            setError(prev => errorMessage);
        }

    }


    return (
        <div className='login-container'>
            <div className="login-wrapper">
                <div className='logo login-logo'>PAY<span>X</span></div>
                <div className='login-form'>
                    <div>
                        <p>Name</p> 
                        <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div>
                        <p>Email</p> 
                        <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className='login-btn' onClick={signup}>Sign up</div>
                    <pre style={{color: 'red', fontWeight: "700", fontSize: '1rem', fontFamily: "Ubuntu", lineHeight: '1.5rem', letterSpacing: "1px"}}>{error}</pre>
                </div>
                <div className='signup-instead'>Already have an account? &nbsp; <Link style={{textDecoration: "none"}} to="/login">Login</Link></div>
            </div>
        </div>
    )
}

export default Signup