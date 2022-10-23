import React, { useState, useEffect } from 'react';
import TextBox from '../common/TextBox'

const Sec6 = ({globalTheme}) => {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 490px)").matches
  )

    useEffect(() => {
    window
    .matchMedia("(max-width: 490px)")
    .addEventListener('change', e => setMatches( e.matches ));
    }, []);

  return (
    <div sec-theme={globalTheme === true ? 'light' : 'dark'} className="Sec6">
        {globalTheme && (<img className="sec6-img" src="/content/sec6-img-light.svg" alt="sec6-img" />)}
        {!globalTheme && (<img className="sec6-img" src="/content/sec6-img-dark.svg" alt="sec6-img" />)}
        <div className="sec6-p1">
            {!matches && (<TextBox 
              heading={"HALF FULL"} 
              contentWidth={100} 
              contentFont={20} 
              hideAuthor={true} 
              textAlign={"left"} 
              width={100} 
              titleFontSize={35} 
              height={100} 
              theme={globalTheme === true ? 'light' : 'dark'} 
            />)}
            {matches && (<TextBox heading={"HALF FULL"} 
              contentWidth={100} 
              contentFont={15} 
              hideAuthor={true} 
              textAlign={"left"} 
              width={100} 
              titleFontSize={25} 
              height={90} 
              theme={globalTheme === true ? 'light' : 'dark'} 
            />)}
        </div>
        <div className="sec6-p2">
            {!matches && (<TextBox 
                heading={"HALF EMPTY"} 
                blur={true} 
                contentWidth={100} 
                contentFont={20} 
                hideAuthor={true} 
                textAlign={"left"} 
                width={100} 
                titleFontSize={35} 
                height={100} 
                theme={globalTheme === true ? 'light' : 'dark'} 
              />)}
            {matches && (<TextBox 
                heading={"HALF EMPTY"} 
                blur={true} 
                contentWidth={100} 
                contentFont={15} 
                hideAuthor={true} 
                textAlign={"left"} 
                width={100} 
                titleFontSize={25} 
                height={90} 
                theme={globalTheme === true ? 'light' : 'dark'}              
              />)}
        </div>
        <span textBox-theme={globalTheme === true ? 'light' : 'dark'} className="sec6-heading">ONE STORY, TWO PERSPECTIVES</span>
    </div>
  )
}

export default Sec6