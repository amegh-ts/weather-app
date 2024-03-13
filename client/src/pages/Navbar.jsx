import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { IoLogIn, IoLogOut } from "react-icons/io5";
import Hero from './Hero';
import { Link } from 'react-router-dom'

const Navbar = ({ weather, forecast }) => {
    // console.log('nav',weather);

    const [activePage, setActivePage] = useState(() => {
        // Retrieve the active page from sessionStorage on component mount
        return sessionStorage.getItem('activePage') || 'hero';
    });

    useEffect(() => {
        sessionStorage.setItem('activePage', activePage);
    }, [activePage]);


    const pageComponents = {
        hero: <Hero weather={weather} forecast={forecast} />,
    };

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
                    {pageComponents[activePage]}
                </div>
            </div>
        </>
    )
}

export default Navbar