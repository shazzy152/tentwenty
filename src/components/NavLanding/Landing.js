import React, { useState, useEffect } from 'react';
import TextBox from '../common/TextBox'

const Landing = ({globalTheme}) => {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 490px)").matches
  )

    useEffect(() => {
    window
    .matchMedia("(max-width: 490px)")
    .addEventListener('change', e => setMatches( e.matches ));
    }, []);

  return (
    <div className="landing-container">
        <div className="land-sec-1">
            {!matches && (<TextBox 
              height={40}
              textAlign={"center"}
              titleFontSize={30}
              authorFont={14}
              theme={globalTheme === true ? 'light' : 'dark'}
            />)}
            {matches && (<TextBox 
              height={40}
              textAlign={"center"}
              titleFontSize={30}
              authorFont={14}
              contentWidth={80}
              theme={globalTheme === true ? 'light' : 'dark'}
            />)}
            <img className="lady" src="/content/lady.png" alt="lady" />
        </div>
        <div className="land-sec-temp">
          {matches && (<div className="land-sec-2">
              <TextBox 
                height={23}
                width={100}
                small={true}
                textAlign={"left"}
                titleFontSize={18}
                titleWidth={100}
                theme={globalTheme === true ? 'light' : 'dark'}
              />
              <TextBox 
                height={23}
                width={100}
                small={true}
                textAlign={"left"}
                titleFontSize={18}
                theme={globalTheme === true ? 'light' : 'dark'}
              />
              <img className="audi" src="/content/audi.png" alt="audi" />
              <TextBox 
                height={23}
                width={100}
                small={true}
                textAlign={"left"}
                titleFontSize={18}
                theme={globalTheme === true ? 'light' : 'dark'}
              />
          </div>)}
          {!matches && (<div className="land-sec-2">
              <TextBox 
                height={23}
                width={100}
                small={true}
                textAlign={"left"}
                titleFontSize={18}
                titleWidth={80}
                theme={globalTheme === true ? 'light' : 'dark'}
              />
              <TextBox 
                height={23}
                width={100}
                small={true}
                textAlign={"left"}
                titleFontSize={18}
                titleWidth={80}
                theme={globalTheme === true ? 'light' : 'dark'}
              />
              <img className="audi" src="/content/audi.png" alt="audi" />
              <TextBox 
                height={23}
                width={100}
                small={true}
                textAlign={"left"}
                titleFontSize={18}
                titleWidth={80}
                theme={globalTheme === true ? 'light' : 'dark'}
              />
          </div>)}
          {matches && (<div className="land-sec-2">
              <img className="burj" src="/content/burj.png" alt="burj" />
              <TextBox 
                height={23}
                width={100}
                small={true}
                textAlign={"left"}
                titleFontSize={18}
                theme={globalTheme === true ? 'light' : 'dark'}
              />
              <TextBox 
                height={23}
                width={100}
                small={true}
                textAlign={"left"}
                titleFontSize={18}
                theme={globalTheme === true ? 'light' : 'dark'}
              />
              <TextBox 
                height={23}
                width={100}
                small={true}
                textAlign={"left"}
                titleFontSize={18}
                theme={globalTheme === true ? 'light' : 'dark'}
              />
          </div>)}
          {!matches && (<div className="land-sec-2">
              <img className="burj" src="/content/burj.png" alt="burj" />
              <TextBox 
                height={23}
                width={100}
                small={true}
                textAlign={"left"}
                titleFontSize={18}
                titleWidth={80}
                theme={globalTheme === true ? 'light' : 'dark'}
              />
              <TextBox 
                height={23}
                width={100}
                small={true}
                textAlign={"left"}
                titleFontSize={18}
                titleWidth={80}
                theme={globalTheme === true ? 'light' : 'dark'}
              />
              <TextBox 
                height={23}
                width={100}
                small={true}
                textAlign={"left"}
                titleFontSize={18}
                titleWidth={80}
                theme={globalTheme === true ? 'light' : 'dark'}
              />
          </div>)}
        </div>
    </div>
  )
}

export default Landing