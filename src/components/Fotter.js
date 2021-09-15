import React from 'react'
import { AiFillLinkedin} from "react-icons/ai";
export default function Fotter() {
    return (
        <>
        <div style={{width:"100%",backgroundColor:"white",marginTop:"15px",zIndex:"1"}}>
            <div className="container" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:".3em 0.4em",alignItems:"center"}}>
                <p className="text-center" style={{ fontSize: "1.7rem", color:"gray",textDecoration:"none",cursor:"pointer" }}>Linked<span><AiFillLinkedin style={{ fontSize: "1.7rem", color: "grey",cursor:"pointer" }}></AiFillLinkedin></span></p>
                <p style={{color:"gray",textDecoration:"none",cursor:"pointer"}}>© 2020</p>
                <p style={{color:"gray",textDecoration:"none",cursor:"pointer"}}>About</p>
                <p style={{color:"gray",textDecoration:"none",cursor:"pointer"}}>Accessibility</p>
                <p style={{color:"gray",textDecoration:"none",cursor:"pointer"}}>User Agreements</p>
                <p style={{color:"gray",textDecoration:"none",cursor:"pointer"}}>Privacy Policy</p>
                <p style={{color:"gray",textDecoration:"none",cursor:"pointer"}}>Cookie Policy</p>
                <p style={{color:"gray",textDecoration:"none",cursor:"pointer"}}>Copyright Policy</p>
                <p style={{color:"gray",textDecoration:"none",cursor:"pointer"}}>Brand Policy</p>
                <p style={{color:"gray",textDecoration:"none",cursor:"pointer"}}>Guest controls</p>
            </div>
        </div>
        </>
        
    )
}
