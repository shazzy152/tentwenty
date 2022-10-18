import React from 'react';
import Profile from '../common/Profile'

const Sec3 = () => {
  return (
    <div className="Sec3">
        <div className="Sec3-p1">
            <Profile 
                imageSize={70} 
                image={"omar"}
                content={"Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"}
                small={true}
                titleFontSize={18}
                heading={"OMAR"} 
            />
            <Profile 
                imageSize={70} 
                image={"larry"}
                content={"Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"}
                small={true}
                titleFontSize={18}
                heading={"LARRY"} 
            />
            <Profile 
                imageSize={70} 
                image={"lubna"}
                content={"Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"}
                small={true}
                titleFontSize={18}
                heading={"LUBNA"} 
            />
            <Profile 
                imageSize={70} 
                image={"shawn"}
                content={"Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in"}
                small={true}
                titleFontSize={18}
                heading={"SHAWN"} 
            />
        </div>
    </div>
  )
}

export default Sec3