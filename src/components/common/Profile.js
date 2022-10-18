import React from 'react';
import TextBox from './TextBox';

const Profile = ({image, imageSize, content, smaller, small, titleFontSize, width, height, titleWidth, flip, textAlign, heading, row}) => {

  return (
    <div 
        style={{
          "width": `${width}%`, 
          "height": `${height}%`, 
          "flexDirection": row ? `row` : `column`, 
          }} 
          className="profile">
      {!flip ? 
      (
        <>
          <img style={{"height":`${imageSize}%`, "margin" : row ? `0 30px 0 0` : null}} className="profile-image" src={`/content/${image}.svg`} alt="profile-image" />
          <TextBox 
            textAlign={textAlign ? textAlign : "center"} 
            heading={heading ? heading : "Zelenskyy"} 
            smaller={smaller} 
            title={content ? content : "Meals on wheels best in the UAE"} 
            small={small}
            titleFontSize={titleFontSize}
            titleWidth={titleWidth}
          />
        </>
        )  : (
        <>
          <TextBox 
            textAlign={textAlign ? textAlign : "center"} 
            heading={heading ? heading : "Zelenskyy"} 
            smaller={smaller} 
            title={content ? content : "Meals on wheels best in the UAE"} 
            small={small}
            titleFontSize={titleFontSize}
            titleWidth={titleWidth}
          />
          <img style={{"height":`${imageSize}%`, "margin":`12px`}} className="profile-image" src={`/content/${image}.svg`} alt="profile-image" />
        </>
      )}
    </div>
  )
}

export default Profile