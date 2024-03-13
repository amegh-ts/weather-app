import React from 'react'
import './SignIn.scss'
import { Link } from 'react-router-dom'
import { IoMailOpenOutline, IoLockClosedOutline } from "react-icons/io5";

const SignIn = () => {
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
                        <input type="mail" placeholder='Email' />
                    </span>
                    <span>
                        <IoLockClosedOutline className='icon' />
                        <input type="password" placeholder='Password' />
                    </span>
                </div>
                <div className="bottom">
                    <button>SIGN IN</button>
                </div>
                <div className='prompt'>
                    <p>Don't have an account <Link to={'/signup'}><span>Sign Up</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn