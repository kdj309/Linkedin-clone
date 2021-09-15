import React, { useState,useEffect } from 'react'
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { RiDeleteBin5Fill, RiShareForwardLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { Avatar } from '@material-ui/core';
import '../css/Individual.css'
import AOS from 'aos'
export default function Individualpost({ Name, message, img,userprofile }) {
    const [usrcomment, setusrcomment] = useState("")
    const [likecount, setlikecount] = useState(7)
    const [comment, setcomment] = useState(false)
    const [showcomments, setshowcomments] = useState(false)
    function btnhandler() {
        setshowcomments(true)
        if (showcomments === false) {
            setusrcomment(" ")
        }
    }
    useEffect(() => {
        AOS.init({
          duration: 500
        })
      }, [])
    return (
        <div className="Main-post-container" data-aos="zoom-in">
            <div className="Post-profile-section">
                <Avatar src={userprofile} style={{ cursor: "pointer" }}></Avatar>
                <div className="profile-intro-container">
                    <h6>{Name}</h6>
                    <p>Linkedin User</p>
                </div>
            </div>
            {img && message ?
                <>
                    <div>{message}</div>
                    <img src={img} alt="user-dp" style={{width: "100%", maxHeight: "250px", objectFit: "contain" }}></img>
                </> : img ? <img src={img} alt="user-dp" style={{ maxWidth: "100%", maxHeight: "250px", objectFit: "contain" }}></img> : <div>{message}</div>}
            <hr></hr>
            <div style={{ display: "flex", height: "max-content" }}>
                <BiLike style={{ color: "#70b5f9", fontSize: "16px", marginLeft: "5px", height: "max-content" }}></BiLike>
                <p style={{ fontSize: "10px", height: "max-content" }}>{likecount}</p>
            </div>
            <div className="Individual-Icon-Container">
                <div className="Post-Icon-container" onClick={() => setlikecount((prev) => prev + 1)}>
                    <BiLike style={{ color: "#70b5f9", fontSize: "24px" }} id="like"></BiLike>
                    <h6>Like</h6>
                </div>
                <div className="Post-Icon-container" onClick={() => setcomment(true)}>
                    <FaRegCommentDots style={{ color: "#7fc15e", fontSize: "24px" }}></FaRegCommentDots>
                    <h6>Comment</h6>
                </div>
                <div className="Post-Icon-container">
                    <RiShareForwardLine style={{ color: "#e7a33e", fontSize: "24px" }} ></RiShareForwardLine>
                    <h6>Share</h6>
                </div>
                <div className="Post-Icon-container">
                    <FiSend style={{ color: "#fc9295", fontSize: "24px" }} ></FiSend>
                    <h6>Send</h6>
                </div>
            </div>
            <div className="post-comment-container" style={{ display: comment ? "flex" : "none" }}>
                <Avatar src={userprofile} style={{ objectFit: "contain", cursor: "pointer" }}></Avatar>
                <input type="text" onChange={(e) => setusrcomment(e.target.value)}>

                </input>
            </div>
            <div>
                {usrcomment.length > 3 ? <button className="btn" style={{ backgroundColor: "#0073b1", color: "white", marginLeft: "75px" }} onClick={() => btnhandler()}>post</button> : null}
                {
                    showcomments ? <>
                        <div className="Post-profile-section" style={{ width: "80%", margin: "auto", flexDirection: "column", marginTop: "10px" }}>
                            <div className="Post-profile-section" style={{ gap: "0px" }}>
                                <Avatar src={userprofile} style={{ cursor: "pointer" }}></Avatar>
                                <div className="profile-intro-container" style={{ backgroundColor: "#f3f2ef", width: "100%" }}>
                                    <h6>{Name}</h6>
                                    <p>Linkedin user</p>
                                    <div style={{ backgroundColor: "#f3f2ef", margin: "auto", width: "100%" }}>{usrcomment}</div>
                                </div>
                                <div style={{ backgroundColor: "#f3f2ef" }}>
                                    <RiDeleteBin5Fill style={{ marginRight: "7px", color: "gray", cursor: "pointer" }} onClick={() => setshowcomments(false)} />
                                </div>
                            </div>
                        </div>
                    </> : null
                }
            </div>
        </div>
    )
}
