import React from 'react'
import WorkAndProjects from '../components/WorkAndProjects/WorkAndProjects.js';
import Education from '../components/Education';
import Bio from '../components/Bio/Bio';
import LandingPage from '../components/LandingPage/LandingPage';
import ContactInfo from '../Layout/ContactInfo';
import Footer from '../components/Footer/Footer.js';

export default function Home() {
    return (
        <div className="homepage">
            <div className="bg-image-home" style={{textAlign:"center"}}>
                <LandingPage />
                <ContactInfo />
                <Bio />
                <WorkAndProjects style={{backgroundColor:"rgb(242 242 245 / 49%)"}}/>
                <Education style={{backgroundImage: "none"}} />                
            </div>
        <Footer />
        </div>
    )
}
