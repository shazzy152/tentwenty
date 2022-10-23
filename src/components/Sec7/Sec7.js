import React from 'react';
import Profile from '../common/Profile'

const Sec7 = ({globalTheme}) => {
  return (
    <div className="Sec7">
        <div sec-theme={globalTheme === true ? 'light' : 'dark'} className="sec7-p1">
            <Profile heading={"EAT"} width={280} titleFontSize={20} image={"sec7-1"} small={true} textAlign={"left"} content={"Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"} theme={globalTheme === true ? 'light' : 'dark'} />
            <Profile heading={"EAT"} width={280} titleFontSize={20} image={"sec7-2"} small={true} textAlign={"left"} content={"Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"} theme={globalTheme === true ? 'light' : 'dark'} />
            <Profile heading={"EAT"} width={280} titleFontSize={20} image={"sec7-3"} small={true} textAlign={"left"} content={"Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"} theme={globalTheme === true ? 'light' : 'dark'} />
            <Profile heading={"EAT"} width={280} titleFontSize={20} image={"sec7-4"} small={true} textAlign={"left"} content={"Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"} theme={globalTheme === true ? 'light' : 'dark'} />
        </div>
    </div>
  )
}

export default Sec7