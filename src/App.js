import React from 'react';
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
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <div className="main">
            <NavLanding />
            <Sec1 />
            <Sec2 />
            <Sec3 />
            <Sec4 />
            <Sec5 />
            <Sec6 />
            <Sec7 />
            <Sec8 />
            <Sec9 />
            <Footer />
        </div>
    )
}

export default App