import React from 'react'
import { AiFillLinkedin} from "react-icons/ai";
export default function Linkedinfotter() {
    return (
        <>
        <div style={{width:"100%",backgroundColor:"white",marginTop:"15px",zIndex:"1"}}>
            <div className="container" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:".3em 0.4em",alignItems:"center"}}>
                <p className="text-center" style={{ fontSize: "0.9rem", color:"gray",cursor:"pointer",textDecoration:"none" }}>Linked<span><AiFillLinkedin style={{ fontSize: "0.9rem", color: "grey",cursor:"pointer" }}></AiFillLinkedin></span></p>
                <p style={{color:"gray",textDecoration:"none",fontSize:"12px",cursor:"pointer"}}>© 2020</p>
                <p style={{color:"gray",textDecoration:"none",fontSize:"12px",cursor:"pointer"}}>About</p>
                <p style={{color:"gray",textDecoration:"none",fontSize:"12px",cursor:"pointer"}}>Privacy Policy</p>
                <p style={{color:"gray",textDecoration:"none",fontSize:"12px",cursor:"pointer"}}>Guest controls</p>
            </div>
        </div>
        </>
        
    )
}
