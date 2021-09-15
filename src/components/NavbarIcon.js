import React from 'react'
import { ImHome3 } from "react-icons/im";
import { BsPeopleFill, BsFillChatSquareDotsFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { Avatar } from '@material-ui/core';
import { MdNotificationsActive } from "react-icons/md";
import '../css/NavbarIcon.css'
import { useAuth } from './ContextProvider';
import { useHistory } from 'react-router';
export default function NavbarIcon() {
const{currentUser,logout}=useAuth()
let path = useHistory()
async function logouthandler() {
    await logout()
    path.push('/signin')
}
    return (
        <div className="Nav-right-section">
            <div className="Navbar-Icon-container">
                <ImHome3 className="icons"></ImHome3>
                <p>Home</p>
            </div>
            <div className="Navbar-Icon-container">
                <BsPeopleFill className="icons"></BsPeopleFill>
                <p>My Network</p>
            </div>
            <div className="Navbar-Icon-container">
                <FaShoppingBag className="icons"></FaShoppingBag>
                <p>Jobs</p>
            </div>
            <div className="Navbar-Icon-container">
                <BsFillChatSquareDotsFill className="icons"></BsFillChatSquareDotsFill>
                <p>Messagings</p>
            </div>
            <div className="Navbar-Icon-container">
                <MdNotificationsActive className="icons"></MdNotificationsActive>
                <p>Notifications</p>
            </div>
            <div className="Navbar-Icon-container" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                <Avatar src={currentUser&&currentUser.photoURL} style={{cursor:"pointer"}}></Avatar>
                <p>Me</p>
                <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog" id="modalcls">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Profile</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="Post-profile-section">
                                    <Avatar src={currentUser&&currentUser.photoURL}></Avatar>
                                    <div className="profile-intro-container">
                                        <h6>{currentUser&&currentUser.displayName}</h6>
                                        <p>LinkedIn user</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={logouthandler} style={{ width: "100%", borderRadius: "24px" }} className="btn btn-outline-primary" data-bs-dismiss="modal">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
