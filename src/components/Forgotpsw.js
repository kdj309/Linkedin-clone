import React, { useState, useEffect } from 'react'
import '../css/signin.css'
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import Fotter from './Fotter';
import { useAuth } from './ContextProvider';
import { useHistory } from 'react-router';
import "firebase/compat/auth";
export default function Forgotpsw() {
    
    let path = useHistory()
    const [error, seterror] = useState("temp")
    const [email, setemail] = useState("")
    const { forgotpswrd } = useAuth()
    
    async function Loginhandler() {
        try {
            await forgotpswrd(email)
            seterror("success")
            setemail(" ")
            setTimeout(() => {
                path.push('/signin')
            },3000);
        } catch (error) {
            seterror("failed")
            
        }
    }
    useEffect(() => {
        document.title = "Linkedin | Forgot password"
    }, [])
    return (
        <>
            <h5 style={{ fontSize: "2rem", color: "#0073b1", cursor: "pointer", marginBottom: "0 !important", marginLeft: "15px" }}>Linked<span><AiFillLinkedin style={{ fontSize: "2rem", color: "#0073b1", cursor: "pointer" }}></AiFillLinkedin></span></h5>
            <div className="form-parent-container">
                <div style={{ backgroundColor: "white", minWidth: "350px", padding: "0.5em 1.6em", boxShadow: " 0 4px 12px rgb(0 0 0 / 15%)" }} >
                    {
                        error === "failed" ? <Aleart message="!Sign-up failed" subclass="danger"></Aleart>
                            : error === "success" ? <Aleart message="check your mail box for further instructions 😄" subclass="success" />
                                : null
                    }
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" onChange={(e) => { setemail(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <button type="button" onClick={Loginhandler} className="btn btn-primary my-2" id="btn" style={{ backgroundColor: "#0a66c2", color: "white", width: "100%", borderRadius: "24px" }}>Submit</button>
                    <hr></hr>
                    <p className="text-center">New to LinkedIn?<Link to="/signup" style={{ textDecoration: "none", color: "#0073b1" }}>Join now</Link></p>
                </div>
            </div>
            <Fotter></Fotter>
        </>
    )
}
function Aleart({ message, subclass }) {
    return (
        <>
            <div className={`alert alert-${subclass}`} role="alert">
                {message}
            </div>
        </>
    )
}
