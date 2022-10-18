import React from 'react';
import TextBox from '../common/TextBox'

const Sec6 = () => {
  return (
    <div className="Sec6">
        <img className="sec6-img" src="/content/sec6-img.svg" alt="sec6-img" />
        <div className="sec6-p1">
            <TextBox heading={"HALF FULL"} contentWidth={100} contentFont={20} hideAuthor={true} textAlign={"left"} width={35} titleFontSize={35} height={100} />
        </div>
        <div className="sec6-p2">
            <TextBox heading={"HALF EMPTY"} blur={true} contentWidth={100} contentFont={20} hideAuthor={true} textAlign={"left"} width={40} titleFontSize={35} height={100} />
        </div>
        <span className="sec6-heading">ONE STORY, TWO PERSPECTIVES</span>
    </div>
  )
}

export default Sec6