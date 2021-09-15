import React from 'react'
import { ImHome3 } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { Avatar } from '@material-ui/core';
import '../../css/NavbarIcon.css'
import { useAuth } from '../../components/ContextProvider';
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
                <ImHome3 style={{fontSize:"0.9em"}} className="icons"></ImHome3>
                <p>Home</p>
            </div>
            <div className="Navbar-Icon-container">
                <BsPeopleFill style={{fontSize:"0.9em"}} className="icons"></BsPeopleFill>
                <p>Network</p>
            </div>
            <div className="Navbar-Icon-container" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                <Avatar src={currentUser&&currentUser.photoURL} style={{width:"20px",height:"20px"}}></Avatar>
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
