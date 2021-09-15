import React from 'react'
import '../css/AnotherNav.css'
import { Link } from "react-router-dom";
export default function AnotherNavbar() {

    return (
        <div className="Link-section">
            <Link to="/signup" className="sign-up-btn">Join now</Link>
            <Link className="btn rounded-pill border border-primary sign-in-btn" to="/signin">Sign In</Link>
        </div>
    )
}
