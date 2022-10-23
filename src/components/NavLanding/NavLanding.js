import React from 'react';
import Navbar from './NavBar'
import Landing from './Landing'

const NavLanding = ({setGlobalTheme, globalTheme}) => {
  return (
    <div className="NavLanding">
        <Navbar setGlobalTheme={setGlobalTheme} />
        <Landing globalTheme={globalTheme} />
    </div>
  )
}

export default NavLanding