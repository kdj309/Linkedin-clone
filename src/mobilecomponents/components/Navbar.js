import React from 'react'
import { AiFillLinkedin, AiOutlineSearch } from "react-icons/ai";
import '../../css/nav.css'
import NavbarIcon from './Navbaricon';
import { useAuth } from '../../components/ContextProvider';
import AnotherNavbar from '../../components/AnotherNavbar';
export default function Navbar() {
    const { currentUser } = useAuth()
    return (
        <>
            <div className="Main-container">
                <div className="container my-own-class">
                    <div className="Nav-left-section">
                        <AiFillLinkedin style={{ fontSize: "1.5rem", color: "#0073b1", cursor: "pointer" }}></AiFillLinkedin>
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
