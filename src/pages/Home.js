import React from 'react'
import '../components/project.css'
import WorkAndProjects from '../components/WorkAndProjects/WorkAndProjects.js';
import Education from '../components/Education';
import Bio from '../components/Bio/Bio';
import LandingPage from '../components/LandingPage/LandingPage';
import ContactInfo from '../Layout/ContactInfo';

export default function Home() {
    return (
        <div className="homepage">
            <div className="bg-image-home" style={{textAlign:"center"}}>
                <LandingPage />
                <ContactInfo />
                <Bio />
                <WorkAndProjects />
                <Education />                
            </div>
        </div>
    )
}
