import React from 'react'

const TextBox = ({
    height,
    width,
    textAlign = null,
    small = false,
    heading,
    smaller = false,
    title,
    contentWidth,
    smallest = false,
    titleFontSize,
    authorFont,
    titleWidth,
    hideAuthor,
    contentFont,
    blur
}) => {

  return (
    <div
        style={{
            "height": `${height}%`,
            "width": `${width}%`,
            "textAlign": `${textAlign}`,
            "alignItems": textAlign === `left` ? "flex-start" : "center"
        }}
        className="textbox">
            {! smallest && <span style={{
                "backgroundColor": !blur ? "black" : "rgba(0, 0, 0, 0)",
                "border": "1px solid black",
                "color": !blur ? "white" : "black"
            }} className="text-heading">{heading ? heading : "TRAVEL"}</span>}
            <span 
                className="text-title" 
                style={{
                    "textAlign": `${textAlign}`,
                    "fontSize": titleFontSize,
                    "width": `${titleWidth}%`,
                    "color": blur ? "rgba(0, 0, 0, 0.3)" : null
                }}>
                {title ? title : "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all"}
            </span>
            {(!small && !smaller && !smallest) && 
                <span 
                    className="text-content" 
                    style={{
                        "textAlign": `${textAlign}`,
                        "width": `${contentWidth}%`,
                        "fontSize": `${contentFont}px`,
                        "color": blur ? "rgba(0, 0, 0, 0.3)" : null
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum.
                </span>}
            {(!smaller && !hideAuthor) && 
                <span style={{"fontSize": `${authorFont}px`}} className="author">U. R. Oliver</span>}
        </div>
  )
}

export default TextBox