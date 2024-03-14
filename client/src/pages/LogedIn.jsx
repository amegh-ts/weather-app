import React, { useEffect, useState } from 'react'
import './LogedIn.scss'
import { IoHeart, IoSearch, IoLogOut, IoPartlySunny, IoEarth, IoPersonSharp, IoSettings } from "react-icons/io5";
import Hero from './Hero';
import Profile from './Profile';
import Popup from '../assets/popups/Popup';

const LogedIn = ({ weather, forecast }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [popup,setPopup]=useState(false)

    const [activePage, setActivePage] = useState(() => {
        // Retrieve the active page from sessionStorage on component mount
        return sessionStorage.getItem('activePage') || 'hero';
    });

    useEffect(() => {
        sessionStorage.setItem('activePage', activePage);
    }, [activePage]);

    const handleSearch = () => {
        setPopup(true);
        if (searchQuery.trim() !== '') {
            const lowerCaseQuery = searchQuery.toLowerCase();
           console.log(lowerCaseQuery);
        }
    };

    const pageComponents = {
        hero: <Hero weather={weather} forecast={forecast} />,
        profile: <Profile />
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
                        {/* <span className='menu'>
                            <IoHome className="icon" />
                            <h4>Home</h4>
                        </span> */}
                    </div>

                    <div className="bottom">
                        <span className='menu'>
                            <IoLogOut className="icon" />
                        </span>
                    </div>
                </div>

            </div>

            <div className='LBody'>
                <div className="Navbar">
                    <div className="left">
                        <div className="title">
                            {/* <h1>Weather App</h1> */}
                            <IoSearch className="icon" onClick={handleSearch}/>
                            <input type="text" placeholder="Search Cities or Places..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }} />
                        </div>
                        <Popup trigger={popup} setTrigger={setPopup}>
                            <div className="search-popup">
                                <h1>sdfghgftydkhgfjkf</h1>
                            </div>
                        </Popup>
                    </div>
                    <div className="right">
                        {/* <span className='likes'>
                            <IoHeart className="icon" />
                        </span> */}
                        <span className={`profile-icon ${activePage === 'profile' ? 'active' : ''}`} onClick={() => { setActivePage('profile') }}>
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

export default LogedIn