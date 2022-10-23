import React, { useState, useEffect } from 'react';
import TextBox from '../common/TextBox'

const Sec6 = () => {

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 490px)").matches
  )

    useEffect(() => {
    window
    .matchMedia("(max-width: 490px)")
    .addEventListener('change', e => setMatches( e.matches ));
    }, []);

  return (
    <div className="Sec6">
        <img className="sec6-img" src="/content/sec6-img.svg" alt="sec6-img" />
        <div className="sec6-p1">
            {!matches && (<TextBox heading={"HALF FULL"} contentWidth={100} contentFont={20} hideAuthor={true} textAlign={"left"} width={100} titleFontSize={35} height={100} />)}
            {matches && (<TextBox heading={"HALF FULL"} contentWidth={100} contentFont={15} hideAuthor={true} textAlign={"left"} width={100} titleFontSize={25} height={100} />)}
        </div>
        <div className="sec6-p2">
            {!matches && (<TextBox heading={"HALF EMPTY"} blur={true} contentWidth={100} contentFont={20} hideAuthor={true} textAlign={"left"} width={100} titleFontSize={35} height={100} />)}
            {matches && (<TextBox heading={"HALF EMPTY"} blur={true} contentWidth={100} contentFont={15} hideAuthor={true} textAlign={"left"} width={100} titleFontSize={25} height={100} />)}
        </div>
        <span className="sec6-heading">ONE STORY, TWO PERSPECTIVES</span>
    </div>
  )
}

export default Sec6