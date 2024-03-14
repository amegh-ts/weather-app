import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { IoLogIn, IoLogOut } from "react-icons/io5";
import Hero from './Hero';
import { Link } from 'react-router-dom'

const Navbar = ({ weather, forecast }) => {

    return (
        <>
            <div className='Body'>
                <div className="Navbar">
                    <div className="left">
                        <div className="title">
                            <h1>Weather App</h1>
                        </div>
                    </div>
                    <div className="right">
                        <Link to={'/signin'}> 
                            <span>
                                <IoLogIn className="icon" />
                                <p>Login</p>
                            </span>
                        </Link>
                    </div>
                </div>

                <div className={'main-body'}>
                    <Hero weather={weather} forecast={forecast}/>
                </div>
            </div>
        </>
    )
}

export default Navbar