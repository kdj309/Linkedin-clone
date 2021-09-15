import React from 'react'
import Form from './Form'
import { AiFillLinkedin } from "react-icons/ai";
import Linkedinfotter from './Linkedinfooter';
export default function SignUp() {
    return (
        <>
            <div style={{ backgroundColor: "#f3f2ef",marginBottom:"15px" }}>
                <h5 className="text-center" style={{ fontSize: "2rem", color: "#0073b1", cursor: "pointer",marginBottom:"0 !important" }}>Linked<span><AiFillLinkedin style={{ fontSize: "2rem", color: "#0073b1", cursor: "pointer" }}></AiFillLinkedin></span></h5>
                <p className="text-center display-6" style={{marginBottom:"0 !important" }}>Make the most of your professional life</p>
                <Form></Form>
            </div>
            <Linkedinfotter></Linkedinfotter>
        </>
    )
}
