import React, { useState, useEffect } from 'react';
import Profile from '../common/Profile'

const Sec5 = ({globalTheme}) => {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 490px)").matches
  )

    useEffect(() => {
    window
    .matchMedia("(max-width: 490px)")
    .addEventListener('change', e => setMatches( e.matches ));
    }, []);

  return (
      <div className="Sec5">
          {!matches && (<>
            <div className="sec5-p1">
                <Profile 
                  titleWidth={70} 
                  imageSize={70} 
                  small={true} 
                  image={"mini"} 
                  width={400} 
                  height={100} 
                  titleFontSize={22} 
                  content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."} 
                  theme={globalTheme === true ? 'light' : 'dark'} 
                />            
            </div>
            <div className="sec5-p1">
                <Profile 
                  flip={true} 
                  titleWidth={70} 
                  imageSize={70} 
                  small={true} 
                  image={"food"} 
                  width={400} 
                  height={100} 
                  titleFontSize={22} 
                  content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."} 
                  theme={globalTheme === true ? 'light' : 'dark'} 
                />
            </div>
            <div className="sec5-p1">
                <Profile 
                  titleWidth={70} 
                  imageSize={70} 
                  small={true} 
                  image={"sea"} 
                  width={400} 
                  height={100} 
                  titleFontSize={22} 
                  content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."} 
                  theme={globalTheme === true ? 'light' : 'dark'} 
                />
            </div>
          </>)}
          {matches && (<>
            <div className="sec5-p1">
                <Profile 
                  imageWidth={70} 
                  titleWidth={70} 
                  imageSize={30} 
                  small={true} 
                  image={"mini"} 
                  width={400} 
                  height={100} 
                  titleFontSize={22} 
                  content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."} 
                  theme={globalTheme === true ? 'light' : 'dark'} 
                />            
            </div>
            <div className="sec5-p1">
                <Profile imageWidth={70} 
                  titleWidth={70} 
                  imageSize={30} 
                  small={true} 
                  image={"food"} 
                  width={400} 
                  height={100} 
                  titleFontSize={22} 
                  content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."} 
                  theme={globalTheme === true ? 'light' : 'dark'} 
                />
            </div>
            <div className="sec5-p1">
                <Profile 
                  imageWidth={70} 
                  titleWidth={70} 
                  imageSize={30} 
                  small={true} 
                  image={"sea"} 
                  width={400} 
                  height={100} 
                  titleFontSize={22} 
                  content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel."} 
                  theme={globalTheme === true ? 'light' : 'dark'} 
                />
            </div>
          </>)}
      </div>
  )
}

export default Sec5