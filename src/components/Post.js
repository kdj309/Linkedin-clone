import React, { useState } from 'react'
import { Avatar } from '@material-ui/core';
import { MdPhoto } from "react-icons/md";
import { RiVideoFill, RiArticleLine } from "react-icons/ri";
import { BiCalendarEvent } from "react-icons/bi";
import '../css/post.css'
import { useAuth } from './ContextProvider';
import { db } from './firebase';
import firebase from "firebase/compat/app";
export default function Post() {
    const [userpost, setuserpost] = useState("")
    const [message, setmessage] = useState("")
    const { currentUser } = useAuth()
    function btnhandler() {
        if (message.length > 2 || userpost) {
            db.collection('posts').add({
                usermsg: message,
                user:currentUser && currentUser.displayName,
                userpic:currentUser && currentUser.photoURL,
                postpic: userpost,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
        else {
            alert('Message length is too short')
        }
    }
    function photohandler(e) {
        let reader = new FileReader()
        reader.onloadend = function (pic) {
            //   document.getElementById("temp").setAttribute("src",pic.target.result)
            setuserpost(pic.target.result)
        }
        reader.readAsDataURL(e[0])
    }
    //console.log(userpost)
    return (
        <div>
            <div className="post-parent-container">
                <div className="post-input-container">
                    <Avatar src={currentUser && currentUser.photoURL} style={{ cursor: "pointer" }}></Avatar>
                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                        Start a Post
                    </button>
                    <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Create a Post</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="Post-profile-section">
                                        <Avatar src={currentUser && currentUser.photoURL} style={{ cursor: "pointer" }}></Avatar>
                                        <div className="profile-intro-container">
                                            <h6>{currentUser && currentUser.displayName}</h6>
                                            <p>LinkedIn User</p>
                                        </div>
                                    </div>
                                    <div className="form-floating">
                                        <textarea onChange={(e) => { setmessage(e.target.value) }} value={message} className="form-control" placeholder="What do you want to talk about?" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                        <label htmlFor="floatingTextarea2">What do you want to talk about?</label>
                                    </div>
                                    {/* <input type="file" accept="image/*" capture="user" placeholder="photo"/> */}
                                </div>
                                <div className="modal-footer" style={{justifyContent:"space-between"}}>
                                    <div className="input-icon-container">
                                        <div className="input-icon-div">
                                            <MdPhoto className="input-icon" style={{ color: "#70b5f9", }}></MdPhoto>
                                            <h6><span><input type="file" onChange={(e) => { photohandler(e.target.files) }} accept="image/*" style={{ opacity: "0", width: "5px" }}></input></span>Photo</h6>
                                        </div>
                                        <div className="input-icon-div">
                                            <RiVideoFill className="input-icon" style={{ color: "#7fc15e" }} ></RiVideoFill>
                                            <h6>Video</h6>
                                        </div>
                                        <div className="input-icon-div">
                                            <BiCalendarEvent className="input-icon" style={{ color: "#e7a33e" }} ></BiCalendarEvent>
                                            <h6>Event</h6>
                                        </div>
                                        <div className="input-icon-div">
                                            <RiArticleLine className="input-icon" style={{ color: "#fc9295" }} ></RiArticleLine>
                                            <h6>Article</h6>
                                        </div>
                                    </div>
                                    <button onClick={btnhandler} type="button" className="btn btn-primary" data-bs-dismiss="modal">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-container">
                    <div className="Post-Icon-container">
                        <MdPhoto className="icons" style={{ color: "#70b5f9", }}></MdPhoto>
                        <h6>Photo</h6>
                    </div>
                    <div className="Post-Icon-container">
                        <RiVideoFill className="icons" style={{ color: "#7fc15e" }} ></RiVideoFill>
                        <h6>Video</h6>
                    </div>
                    <div className="Post-Icon-container">
                        <BiCalendarEvent className="icons" style={{ color: "#e7a33e" }} ></BiCalendarEvent>
                        <h6>Event</h6>
                    </div>
                    <div className="Post-Icon-container">
                        <RiArticleLine className="icons" style={{ color: "#fc9295" }} ></RiArticleLine>
                        <h6>Article</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
