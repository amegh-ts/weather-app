import React, { useState } from 'react'
import './SignIn.scss'
import { Link } from 'react-router-dom'
import { IoMailOpenOutline, IoLockClosedOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { signInData } from '../ApiCalls';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const onSignInClick = async (e) => {
        e.preventDefault();
        try {
          signInData({ email, password }, dispatch)
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div className='SignIn'>
            <div className="container">
                <div className="top">
                    <h1>Sign In</h1>
                    <p>Please enter Your Credentials</p>
                </div>
                <div className="middle">
                    <span>
                        <IoMailOpenOutline className='icon' />
                        <input type="mail" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </span>
                    <span>
                        <IoLockClosedOutline className='icon' />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </span>
                </div>
                <div className="bottom">
                    <button onClick={onSignInClick}>SIGN IN</button>
                </div>
                <div className='prompt'>
                    <p>Don't have an account <Link to={'/signup'}><span>Sign Up</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn