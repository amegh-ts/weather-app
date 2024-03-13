import React from 'react'
import './SignIn.scss'
import { IoPersonOutline,IoMailOpenOutline, IoLockClosedOutline } from "react-icons/io5";

const SignUp = () => {
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
                        <input type="text" placeholder='Username' />
                    </span>
                    <span>
                        <IoMailOpenOutline className='icon' />
                        <input type="mail" placeholder='Email' />
                    </span>
                    <span>
                        <IoLockClosedOutline className='icon' />
                        <input type="password" placeholder='Password' />
                    </span>
                    <span>
                        <IoLockClosedOutline className='icon' />
                        <input type="password" placeholder='Confirm Password' />
                    </span>
                </div>
                <div className="bottom">
                    <button>SIGN UP</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp