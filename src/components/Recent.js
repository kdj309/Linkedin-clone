import React from 'react'
import { FiHash } from "react-icons/fi";
import '../css/profile.css'
import '../css/News.css'
function Recent({ text }) {
    return (
        <div className="recent-section">
            <h6><span style={{ marginRight: "8px", color: "#0073b1" }}><FiHash></FiHash></span>{text}</h6>
        </div>
    )
}

export default Recent
