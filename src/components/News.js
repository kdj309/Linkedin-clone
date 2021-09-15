import React from 'react'
import {GoPrimitiveDot} from "react-icons/go";
import '../css/News.css'
function News({heading,text}) {
    return (
        <div className="news-container">
             <h6><span style={{marginBlock:"10px",color: "#0073b1"}}><GoPrimitiveDot style={{}}></GoPrimitiveDot></span>{heading}</h6>
                <p>{text}</p>
        </div>
    )
}

export default News
