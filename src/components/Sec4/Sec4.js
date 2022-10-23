import React, { useState, useEffect } from 'react';
import TextBox from '../common/TextBox'

const Sec4 = () => {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 490px)").matches
  )

    useEffect(() => {
    window
    .matchMedia("(max-width: 490px)")
    .addEventListener('change', e => setMatches( e.matches ));
    }, []);

  return (
    <div className="sec4">
        <img className="sec4-img" src="/content/sec4-img.jpg" alt="sec4-img" />
        <span className="sec4-title">Meals on wheels: best in the UAE</span>
        <div className="sec4-textbox">
            {!matches && (<TextBox authorFont={15} textAlign={"center"} smallest={true} titleFontSize={35} />)}
            {matches && (<TextBox authorFont={15} textAlign={"center"} smallest={true} titleFontSize={20} />)}
        </div>
    </div>
  )
}

export default Sec4