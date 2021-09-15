import React, { useEffect, useState } from "react";
import Individualpost from "./Individualpost";
import { db } from "./firebase";
import loader from '../assets/ajax-loader.gif'
export default function UserPosts() {

    const [loading, setloading] = useState(true)
    const [userposts, setuserposts] = useState([])
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            setuserposts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
            setloading(false)
        })
    }, [])
    return (
        <>{
            loading ? <img style={{marginLeft:"45%",marginTop:"10px"}} src={loader} alt="loader"></img> : userposts.map(({ id, data: { usermsg, timestamp,postpic,user,userpic } }, index) => {
                return (
                    <>
                        <Individualpost key={timestamp} message={usermsg} Name={user} img={postpic} userprofile={userpic}></Individualpost>
                    </>
                )
            })
        }
        </>
    )
}
