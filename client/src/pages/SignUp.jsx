import React, { useState } from 'react'
import './SignIn.scss'
import { Link, useNavigate } from 'react-router-dom'
import { IoPersonOutline, IoMailOpenOutline, IoLockClosedOutline } from "react-icons/io5";
import { signUpData } from '../ApiCalls';

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()

    const onSignupClick = () => {
        try {
            if (!username || !email || !password) {
                alert('Please fill in all fields.');
                return;
            }
            signUpData({ username, email, password})
            console.log(username, email, password);
            alert('Account Created Successfully. Please Login to continue')
            navigate('/signin')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='SignUp'>
            <div className="container">
                <div className="top">
                    <h1>Sign Up</h1>
                    <p>Please enter Your Credentials</p>
                </div>
                <div className="middle">
                    <span>
                        <IoPersonOutline className='icon' />
                        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </span>
                    <span>
                        <IoMailOpenOutline className='icon' />
                        <input type="mail" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </span>
                    <span>
                        <IoLockClosedOutline className='icon' />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </span>
                </div>
                <div className="bottom">
                    <button onClick={onSignupClick}>SIGN UP</button>
                </div>
                <div className='prompt'>
                    <p>Already have an account <Link to={'/signin'}><span>Login</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp