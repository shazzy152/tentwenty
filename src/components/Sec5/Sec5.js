import React from 'react';
import Profile from '../common/Profile'

const Sec5 = () => {
  return (
    <div className="Sec5">
        <div className="sec5-p1">
            <Profile titleWidth={70} imageSize={70} small={true} image={"mini"} width={100} height={100} titleFontSize={22} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."} />            
        </div>
        <div className="sec5-p1">
            <Profile flip={true} titleWidth={70} imageSize={70} small={true} image={"food"} width={100} height={100} titleFontSize={22} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."} />
        </div>
        <div className="sec5-p1">
            <Profile titleWidth={70} imageSize={70} small={true} image={"sea"} width={100} height={100} titleFontSize={22} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."} />
        </div>
    </div>
  )
}

export default Sec5