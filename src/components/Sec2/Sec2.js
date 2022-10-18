import React from 'react';
import TextBox from '../common/TextBox';

const Sec2 = () => {
  return (
    <div className="Sec2">
        <div className="Sec2-p1">
            <img className="streetMan" src="/content/streetMan.svg" alt="streetMan" />
            <TextBox contentWidth={80} height={50} width={40} textAlign={"left"} titleFontSize={30} />
        </div>
        <div className="Sec2-p2">
            <div className="p2">
                <img className="p2-img" src="/content/bikeMan.svg" alt="bikeMan" />
                <TextBox height={100} width={40} heading={"CULTURE"} title={"Meals on wheels best food trucks in the UAE"} small={true} textAlign={"left"} titleFontSize={18} />
            </div>
            <div className="p2">
                <img className="p2-img" src="/content/sundae.svg" alt="sundae" />
                <TextBox height={100} width={40} heading={"CULTURE"} title={"Meals on wheels best food trucks in the UAE"} small={true} textAlign={"left"} titleFontSize={18} />
            </div>
            <div className="p2">
                <img className="p2-img" src="/content/bikeMan.svg" alt="bike" />
                <TextBox height={100} width={40} heading={"CULTURE"} title={"Meals on wheels best food trucks in the UAE"} small={true} textAlign={"left"} titleFontSize={18} />
            </div>
        </div>
    </div>
  )
}

export default Sec2