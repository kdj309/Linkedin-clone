import React from 'react'
import News from './News'
import '../css/News.css'
export default function Topcourse() {
    return (
        <div className="News-parent-container">
               <News heading="Uncover Your Authentic Self at Work" text="Kenji Yonsho"></News>
               <News heading="Data Science" text="Doug Rose"></News>
               <News heading="Cloud Basics" text="getAbstract"></News>
        </div>
    )
}
