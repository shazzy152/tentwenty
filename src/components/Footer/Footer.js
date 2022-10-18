import React from 'react'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-p1">
            <div className="footer-sub">
                <label>NEWS</label>
                <ul>
                    <li>Featured News</li>
                    <li>Latest News</li>
                </ul>
            </div>
            <div className="footer-sub">
                <label>LIFE</label>
                <ul>
                    <li>Featured News</li>
                    <li>Latest News</li>
                    <li>Featured News</li>
                    <li>Latest News</li>
                    <li>Featured News</li>
                    <li>Latest News</li>
                    <li>Featured News</li>
                </ul>
            </div>
            <div className="footer-sub">
                <label>BUSINESS</label>
                <ul>
                    <li>Featured News</li>
                    <li>Latest News</li>
                    <li>Featured News</li>
                    <li>Latest News</li>
                    <li>Featured News</li>
                    <li>Latest News</li>
                </ul>
            </div>
            <div className="footer-sub">
                <div className="footer-sub-1">
                    <span>SUBSCRIBE</span>
                    <span style={{"width": `70%`}} >Get fresh updates about  the fashion, beauty, trends</span>
                    <div>
                        <span>Enter your email below</span>
                        <span>Submit</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-p2">
            <span>MAGAZINE</span>
            <span>CONTACT</span>
            <span>ABOUT</span>
            <span>PRESS</span>
            <span>SITEMAP</span>
            <span>TS + CS</span>
        </div>
    </div>
  )
}

export default Footer