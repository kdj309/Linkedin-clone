import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useAuth } from './ContextProvider';
import { useHistory } from 'react-router';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


export default function Form() {
    const auth = firebase.auth();
    let path = useHistory()
    const [error, seterror] = useState("temp")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    const [photourl, setphotourl] = useState("")
    const { Signup} = useAuth()
    async function Loginhandler() {
        try {
            await Signup(email, password)
            seterror("success")
            auth.onAuthStateChanged(user => {
                // Check for user status
                
                user.updateProfile({
                    displayName: name,
                    photoURL: photourl
                })
            });
            setTimeout(() => {
                setname(" ")
                setemail(" ")
                setpassword(" ")
                setphotourl(" ")
                path.push('/')
            },5000);
            
        } catch (error) {
            seterror("failed")
            //console.log(error)
        }

    }
    
    return (
        <div style={{ backgroundColor: "white", width: "30%", margin: "auto", padding: "0.5em 1.6em" }} >
            {
                error === "failed" ? <Aleart message="!Sign-up failed" subclass="danger"></Aleart>
                    : error === "success" ? <Aleart message="!Sign-up Success 😄" subclass="success" />
                        : null
            }
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" onChange={(e) => { setemail(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">User Name</label>
                <input type="text" onChange={(e) => { setname(e.target.value) }} className="form-control" id="username" required />
            </div>
            <div className="mb-3">
                <label htmlFor="photourl" className="form-label">Photo URL(optional)</label>
                <input type="text" onChange={(e) => { setphotourl(e.target.value) }} className="form-control" id="photourl" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" onChange={(e) => { setpassword(e.target.value) }} className="form-control" id="exampleInputPassword1" required />
            </div>
            <div className="mb-3">
                <label htmlFor="btn" className="form-text">By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</label>
                <button onClick={Loginhandler} type="button" className="btn btn-primary" id="btn" style={{ backgroundColor: "#0a66c2", color: "white", width: "100%", borderRadius: "24px" }}>Agree & Join</button>
            </div>
           <hr></hr>
            <p className="text-center">Already on Linkedin?<Link to="/signin" style={{ textDecoration: "none", color: "#0073b1" }}>login</Link></p>
        </div>
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
