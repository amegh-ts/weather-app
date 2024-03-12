import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { IoHome, IoLogOut, IoPartlySunny, IoEarth, IoPersonSharp, IoSettings } from "react-icons/io5";
import Hero from './Hero';

const Navbar = ({weather}) => {
console.log('nav',weather);

    const [activePage, setActivePage] = useState(() => {
        // Retrieve the active page from sessionStorage on component mount
        return sessionStorage.getItem('activePage') || 'hero';
    });

    useEffect(() => {
        sessionStorage.setItem('activePage', activePage);
    }, [activePage]);


    const pageComponents = {
        hero: <Hero weather={weather}/>,
    };

    return (
        <>
            <div className="Sidebar">
                <div className="container">
                    <div className="top">
                        <img src="logo.png" alt="" />
                    </div>
                    <div className="middle">
                        <span className={`menu ${activePage === 'hero' ? 'active' : ''}`} onClick={() => { setActivePage('hero'); }}>
                            <IoPartlySunny className="icon" />
                            <h4>Weather</h4>
                        </span>
                        <span className='menu'>
                            <IoEarth className="icon" />
                            <h4>Cities</h4>
                        </span>
                        <span className='menu'>
                            <IoSettings className="icon" />
                            <h4>Settings</h4>
                        </span>
                        <span className='menu'>
                            <IoHome className="icon" />
                            <h4>Home</h4>
                        </span>
                    </div>

                    <div className="bottom">
                        <span className='menu'>
                            <IoLogOut className="icon" />
                        </span>
                    </div>
                </div>

            </div>

            <div className='Body'>
                <div className="Navbar">
                    <div className="left">
                        <div className="title">
                            <h1>Weather App</h1>
                            {/* <IoSearch className="icon" /> */}
                            {/* <input type="text" placeholder="Search jobs, freelancers..." /> */}
                        </div>
                    </div>
                    <div className="right">
                        <span>
                            <IoPersonSharp className="icon" />
                        </span>
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