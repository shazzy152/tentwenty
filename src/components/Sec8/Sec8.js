import React, { useState, useEffect } from 'react';
import Profile from '../common/Profile';

const Sec8 = ({globalTheme}) => {

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 490px)").matches
      )

    useEffect(() => {
    window
    .matchMedia("(max-width: 490px)")
    .addEventListener('change', e => setMatches( e.matches ));
    }, []);

  return (
    <div className="Sec8">
        {!matches && (<>
            <div className="sec8-p1">
                <Profile 
                    image={"sec8-img"}
                    imageSize={65} 
                    width={400} 
                    height={100} 
                    titleFontSize={18} 
                    titleWidth={70} 
                    content={"Meals on wheels best food trucks in the UAE"} 
                    small={true} 
                    textAlign={"left"} 
                    row={true}
                    heading={"KETO KABABS"}
                    theme={globalTheme === true ? 'light' : 'dark'} 
                />
                <Profile 
                    image={"sec8-img"}
                    imageSize={65} 
                    width={400} 
                    height={100} 
                    titleFontSize={18} 
                    titleWidth={70} 
                    content={"Meals on wheels best food trucks in the UAE"} 
                    small={true} 
                    textAlign={"left"} 
                    row={true}
                    heading={"ITALIAN DESERTS"}
                    theme={globalTheme === true ? 'light' : 'dark'} 
                />
                <Profile 
                    image={"sec8-img"}
                    imageSize={65} 
                    width={400} 
                    height={100} 
                    titleFontSize={18} 
                    titleWidth={70} 
                    content={"Meals on wheels best food trucks in the UAE"} 
                    small={true} 
                    textAlign={"left"} 
                    row={true}
                    heading={""}  
                    theme={globalTheme === true ? 'light' : 'dark'}        
                />
            </div>
            <div className="sec8-p2">
                <Profile 
                    image={"sec8-img"}
                    imageSize={65} 
                    width={400} 
                    height={100} 
                    titleFontSize={18} 
                    titleWidth={70} 
                    content={"Meals on wheels best food trucks in the UAE"} 
                    small={true} 
                    textAlign={"left"} 
                    row={true}
                    heading={""} 
                    theme={globalTheme === true ? 'light' : 'dark'}
                />
                <Profile 
                    image={"sec8-img"}
                    imageSize={65} 
                    width={400} 
                    height={100} 
                    titleFontSize={18} 
                    titleWidth={70} 
                    content={"Meals on wheels best food trucks in the UAE"} 
                    small={true} 
                    textAlign={"left"} 
                    row={true}
                    heading={""} 
                    theme={globalTheme === true ? 'light' : 'dark'}
                />
                <Profile 
                    image={"sec8-img"}
                    imageSize={65} 
                    width={400} 
                    height={100} 
                    titleFontSize={18} 
                    titleWidth={70} 
                    content={"Meals on wheels best food trucks in the UAE"} 
                    small={true} 
                    textAlign={"left"} 
                    row={true}
                    heading={""}     
                    theme={globalTheme === true ? 'light' : 'dark'}             
                />
            </div>
        </>)}
        {matches && (<>
            <div className="sec8-p1">
                <Profile 
                    image={"sec8-img"}
                    imageSize={65} 
                    width={300} 
                    height={100} 
                    titleFontSize={18} 
                    titleWidth={100} 
                    content={"Meals on wheels best food trucks in the UAE"} 
                    small={true} 
                    textAlign={"left"} 
                    row={true}
                    heading={"KETO KABABS"} 
                    theme={globalTheme === true ? 'light' : 'dark'}
                />
                <Profile 
                    image={"sec8-img"}
                    imageSize={65} 
                    width={300} 
                    height={100} 
                    titleFontSize={18} 
                    titleWidth={100} 
                    content={"Meals on wheels best food trucks in the UAE"} 
                    small={true} 
                    textAlign={"left"} 
                    row={true}
                    heading={"KOREAN BBQ"} 
                    theme={globalTheme === true ? 'light' : 'dark'}
                />
                <Profile 
                    image={"sec8-img"}
                    imageSize={65} 
                    width={300} 
                    height={100} 
                    titleFontSize={18} 
                    titleWidth={100} 
                    content={"Meals on wheels best food trucks in the UAE"} 
                    small={true} 
                    textAlign={"left"} 
                    row={true}
                    heading={"FRENCH PASTA"}  
                    theme={globalTheme === true ? 'light' : 'dark'}        
                />
            </div>
            <div className="sec8-p2">
            <Profile 
                    image={"sec8-img"}
                    imageSize={65} 
                    width={300} 
                    height={100} 
                    titleFontSize={18} 
                    titleWidth={100} 
                    content={"Meals on wheels best food trucks in the UAE"} 
                    small={true} 
                    textAlign={"left"} 
                    row={true}
                    heading={"KETO KABABS"} 
                    theme={globalTheme === true ? 'light' : 'dark'}
                />
                <Profile 
                    image={"sec8-img"}
                    imageSize={65} 
                    width={300} 
                    height={100} 
                    titleFontSize={18} 
                    titleWidth={100} 
                    content={"Meals on wheels best food trucks in the UAE"} 
                    small={true} 
                    textAlign={"left"} 
                    row={true}
                    heading={"KOREAN BBQ"} 
                    theme={globalTheme === true ? 'light' : 'dark'}
                />
                <Profile 
                    image={"sec8-img"}
                    imageSize={65} 
                    width={300} 
                    height={100} 
                    titleFontSize={18} 
                    titleWidth={100} 
                    content={"Meals on wheels best food trucks in the UAE"} 
                    small={true} 
                    textAlign={"left"} 
                    row={true}
                    heading={"FRENCH PASTA"} 
                    theme={globalTheme === true ? 'light' : 'dark'}         
                />
            </div>
        </>)}
    </div>
  )
}

export default Sec8