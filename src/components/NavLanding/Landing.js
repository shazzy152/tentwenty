import React from 'react';
import TextBox from '../common/TextBox'

const Landing = () => {
  return (
    <div className="landing-container">
        <div className="land-sec-1">
            <TextBox 
              height={40}
              textAlign={"center"}
              titleFontSize={30}
              authorFont={14}
            />
            <img className="lady" src="/content/lady.png" alt="lady" />
        </div>
        <div className="land-sec-2">
            <TextBox 
              height={23}
              width={100}
              small={true}
              textAlign={"left"}
              titleFontSize={18}
            />
            <TextBox 
              height={23}
              width={100}
              small={true}
              textAlign={"left"}
              titleFontSize={18}
            />
            <img className="audi" src="/content/audi.png" alt="audi" />
            <TextBox 
              height={23}
              width={100}
              small={true}
              textAlign={"left"}
              titleFontSize={18}
            />
        </div>
        <div className="land-sec-2">
            <img className="burj" src="/content/burj.png" alt="burj" />
            <TextBox 
              height={23}
              width={100}
              small={true}
              textAlign={"left"}
              titleFontSize={18}
            />
            <TextBox 
              height={23}
              width={100}
              small={true}
              textAlign={"left"}
              titleFontSize={18}
            />
            <TextBox 
              height={23}
              width={100}
              small={true}
              textAlign={"left"}
              titleFontSize={18}
            />
        </div>
    </div>
  )
}

export default Landing