import React, { useState, useEffect } from 'react';

const NavBar = ({setGlobalTheme}) => {

    const [theme, setTheme] = useState(false);

    const setCurrentTheme = () => {
        setTheme(theme => !theme)
        setGlobalTheme(theme)
    }

  return (
    <div className="NavBar">
        <div className="nav-sec-1">
            <div className="menu-container">
                <img className="hamburger" src="/content/hamburger.svg" alt="hamburger" />
                <span className="menu-button">MENU</span>
                <img onClick={setCurrentTheme} className="moon" src="/content/moon.png" alt="moon" />
            </div>
            <div className="logo-container">
                <img className="todayLogo" src="/content/Logo.svg" alt="logo" />
            </div>
        </div>
        <div className="nav-sec-2">
            <div className="options-container">
                <span>NEWS</span>
                <span>OPINION</span>
                <span>LIFE</span>
                <span>BUSINESS</span>
                <span>MAGAZINE</span>
                <span>NEWSLETTER</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar