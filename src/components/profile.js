import React, { useState,useEffect } from 'react'
import '../css/profile.css'
import { Avatar } from '@material-ui/core';
import bg from '../assets/profile_background.jpg'
import { useAuth } from './ContextProvider';
import Recent from './Recent';
export default function Profile() {
    const { currentUser } = useAuth()
    const [recenttrends, setrecenttrends] = useState([
        {
            text: "React global summit"
        },
        {
            text: "The brillient grad"
        },
        {
            text: "hiring"
        },
        {
            text: "DSA bootcamp"
        },
        {
            text: "Javascript Summit"
        }])
    const arry = [
        [
            {
                text: "React global summit"
            },
            {
                text: "The brillient grad"
            },
            {
                text: "hiring"
            },
            {
                text: "DSA bootcamp"
            },
            {
                text: "Javascript Summit"
            }
        ],
        [
            {
                text: "Javascript global summit"
            },
            {
                text: "ES20 features"
            },
            {
                text: "hiring"
            },
            {
                text: "DSA bootcamp"
            },
            {
                text: "Angular"
            }
        ],
        [
            {
                text: "Microservice architecture"
            },
            {
                text: "Agile Method"
            },
            {
                text: "hiring"
            },
            {
                text: "CP / Development"
            },
            {
                text: "Weired Javascript"
            }
        ]
    ]

    useEffect(() => {
        if (currentUser) {
            setrecenttrends(arry[Math.floor(Math.random() * arry.length)])
        }
    }, [currentUser])
    return (
        <>
            <div className="profile-container">
                <div>
                    <div className="background-div">
                        <img src={bg} alt="background"></img>
                    </div>
                    <div className="profile-div">
                        <Avatar src={currentUser && currentUser.photoURL} style={{ width: "65px", height: "65px",cursor:"pointer" }}></Avatar>
                        <h3>{currentUser && currentUser.displayName}</h3>
                        <p>Linkedin User</p>
                    </div>
                    <div className="profile-text-container">
                        <div className="profile-text-div">
                            <p>Who viewed your profile</p>
                            <p style={{ color: "#0073b1" }}>{Math.floor(Math.random() * 500)}</p>
                        </div>
                        <div className="profile-text-div">
                            <p>Views of your posts</p>
                            <p style={{ color: "#0073b1" }}>{Math.floor(Math.random() * 500)}</p>
                        </div>
                    </div>
                    <div className="recent-section-container">
                        <p style={{color:"grey"}}>Recent</p>
                        {
                            recenttrends.map((news, index) => {
                                return (
                                    <>
                                        <Recent key={index} text={news.text}></Recent>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
