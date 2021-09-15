import React, { useEffect,useState } from 'react'
import News from './News'
import '../css/News.css'
import { useAuth } from './ContextProvider';
export default function Topnews() {
    const {currentUser}=useAuth()
    const [newsarry, setnewsarry] = useState([
    {
        heading: "Is zoom boom over",
        text: "1 day ago 50,789 readers"
    },
    {
        heading: "TCS's returns to office plans",
        text: "1 day ago 24,789 readers"
    },
    {
        heading: "How short is too short job",
        text: "1 day ago ,11,686 readers"
    },
    {
        heading: "Switching carrers midway",
        text: "1 day ago 11,816 readers"
    },
    {
        heading: "PayU to acquire BillDesk",
        text: "1 day ago 2,736 readers"
    }])
    const arry = [[
        {
            heading: "Is zoom boom over",
            text: "1 day ago 50,789 readers"
        },
        {
            heading: "TCS's returns to office plans",
            text: "1 day ago 24,789 readers"
        },
        {
            heading: "How short is too short job",
            text: "1 day ago ,11,686 readers"
        },
        {
            heading: "Switching carrers midway",
            text: "1 day ago 11,816 readers"
        },
        {
            heading: "PayU to acquire BillDesk",
            text: "1 day ago 2,736 readers"
        }]
        ,[
        {
            heading: "Interview can call your bluf",
            text: "4 day ago 21,5844 readers"
        },
        {
            heading: "Fat pay hikes are coming",
            text: "3 day ago 36,752 readers"
        },
        {
            heading: "Is Thursday is the new Black?",
            text: "2 day ago ,109,309 readers"
        },
        {
            heading: "it's Madurai over Mumbai for IT",
            text: "7 day ago 15,918 readers"
        },
        {
            heading: "Bitcoin's rocky EI salvador debut",
            text: "2 day ago 50,736 readers"
        }
    ], [
        {
            heading: "Covid19 updates in india",
            text: "1 day ago 50,789 readers"
        },
        {
            heading: "WFH till december",
            text: "1 day ago 24,789 readers"
        },
        {
            heading: "Mass BULK hiring tcs,infosys",
            text: "1 day ago ,11,686 readers"
        },
        {
            heading: "Automation killing jobs",
            text: "1 day ago 11,816 readers"
        },
        {
            heading: "Hyderbad is 2nd silicon valley of india",
            text: "1 day ago 2,736 readers"
        },
    ]
    ];
    
    useEffect(() => {
        if(currentUser){
            setnewsarry(arry[Math.floor(Math.random() * arry.length)])
        }
        
    }, [currentUser])
    return (
        <div className="News-parent-container">
            {
                newsarry.map((news, index) => {
                    return (
                        <>
                            <News key={news.heading} heading={news.heading} text={news.text}></News>
                        </>
                    )
                })
            }
        </div>
    )
}
