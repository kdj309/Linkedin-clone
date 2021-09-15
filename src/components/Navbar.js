import React from 'react'
import { AiFillLinkedin, AiOutlineSearch } from "react-icons/ai";
import '../css/nav.css'
import NavbarIcon from './NavbarIcon';
import { useAuth } from './ContextProvider';
import AnotherNavbar from './AnotherNavbar';
export default function Navbar() {
    const { currentUser } = useAuth()
    //console.log(currentUser)
    return (
        <>
            <div className="Main-container">
                <div className="container my-own-class">
                    <div className="Nav-left-section">
                        <AiFillLinkedin style={{ fontSize: "2.7rem", color: "#0073b1", cursor: "pointer" }}></AiFillLinkedin>
                        <div className="Nav-left-section-innerdiv">
                            <AiOutlineSearch style={{ fontSize: "1.3em" }}></AiOutlineSearch>
                            <input type="text" placeholder="Search"></input>
                        </div>
                    </div>
                    <div className="Nav-right-container-div">
                        {
                            currentUser ? <NavbarIcon></NavbarIcon> : <AnotherNavbar></AnotherNavbar>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
