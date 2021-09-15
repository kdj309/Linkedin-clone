import React from 'react'
import Profile from './profile'
import '../css/body.css'
import Post from './Post'
import Topnews from './Topnews'
import Topcourse from './Topcourse'
import UserPosts from './UserPosts'
export default function Body() {
    return (
        <>
            <div className="body-container">
                <div className="container my-flex-class">
                    <Profile></Profile>
                    <div className="posts-container">
                        <Post></Post>
                        <UserPosts></UserPosts>
                    </div>
                    <div className="news-container">
                        <div className="news-child-container">
                            <p>Linkedin News</p>
                            <Topnews></Topnews>
                        </div>
                        <div className="news-child-container-two">
                            <p>Today's Top course</p>
                            <Topcourse></Topcourse>
                        </div>
                        <div className="footer" style={{width:"100%"}}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0.4em", alignItems: "center",width:"100%" }}>
                                <p>About</p>
                                <p>Accessibility</p>
                                <p>Help center</p>
                            </div>
                            <div className="text-center"> LinkedIn © 2021</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
