import React from 'react'
import Profile from '../../components/profile'
import '../../css/body.css'
import Post from '../../components/Post'
import UserPosts from '../../components/UserPosts'
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
                </div>
            </div>
        </>
    )
}
