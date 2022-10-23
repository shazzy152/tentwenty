import React, { useState, useEffect } from 'react';
import '../sass/main.scss';
import NavLanding from './components/NavLanding/NavLanding';
import Sec1 from './components/Sec1/Sec1'
import Sec2 from './components/Sec2/Sec2'
import Sec3 from './components/Sec3/Sec3'
import Sec4 from './components/Sec4/Sec4';
import Sec5 from './components/Sec5/Sec5';
import Sec6 from './components/Sec6/Sec6';
import Sec7 from './components/Sec7/Sec7';
import Sec8 from './components/Sec8/Sec8';
import Sec9 from './components/Sec9/Sec9';
import Footer from './components/Footer/Footer';

const App = () => { 

    const [globalTheme, setGlobalTheme] = useState(true)

    useEffect(() => {
        localStorage.setItem('theme', globalTheme)   
    })

    return (
        <div main-theme={globalTheme === true ? 'light' : 'dark'} className="main">
            <NavLanding globalTheme={globalTheme} setGlobalTheme={setGlobalTheme} />
            <Sec1 globalTheme={globalTheme} />
            <Sec2 globalTheme={globalTheme} />
            <Sec3 globalTheme={globalTheme} />
            <Sec4 />
            <Sec5 globalTheme={globalTheme} />
            <Sec6 globalTheme={globalTheme} />
            <Sec7 globalTheme={globalTheme} />
            <Sec8 globalTheme={globalTheme} />
            <Sec9 globalTheme={globalTheme} />
            <Footer globalTheme={globalTheme} />
        </div>
    )
}

export default App