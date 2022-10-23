import React from 'react';
import Profile from '../common/Profile'

const Sec3 = ({globalTheme}) => {
  return (
    <div className="Sec3">
        <div sec-theme={globalTheme === true ? 'light' : 'dark'} className="Sec3-p1">
            <Profile 
                imageSize={70} 
                image={"omar"}
                content={"Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"}
                small={true}
                titleFontSize={18}
                heading={"OMAR"}
                theme={globalTheme === true ? 'light' : 'dark'} 
            />
            <Profile 
                imageSize={70} 
                image={"larry"}
                content={"Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"}
                small={true}
                titleFontSize={18}
                heading={"LARRY"}
                theme={globalTheme === true ? 'light' : 'dark'} 
            />
            <Profile 
                imageSize={70} 
                image={"lubna"}
                content={"Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"}
                small={true}
                titleFontSize={18}
                heading={"LUBNA"}
                theme={globalTheme === true ? 'light' : 'dark'} 
            />
            <Profile 
                imageSize={70} 
                image={"shawn"}
                content={"Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"}
                small={true}
                titleFontSize={18}
                heading={"SHAWN"} 
                theme={globalTheme === true ? 'light' : 'dark'}
            />
        </div>
    </div>
  )
}

export default Sec3