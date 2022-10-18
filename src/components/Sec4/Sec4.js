import React from 'react';
import TextBox from '../common/TextBox'

const Sec4 = () => {
  return (
    <div className="sec4">
        <img className="sec4-img" src="/content/sec4-img.jpg" alt="sec4-img" />
        <span className="sec4-title">Meals on wheels: best in the UAE</span>
        <div className="sec4-textbox">
            <TextBox authorFont={15} width={60} textAlign={"center"} smallest={true} titleFontSize={35} />
        </div>
    </div>
  )
}

export default Sec4