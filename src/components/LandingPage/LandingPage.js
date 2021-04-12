import React from 'react';
import sunflower from '../../images/sunflower.jpeg';
import '../../components/LandingPage/landingPage.css'



const LandingPage = () =>{
    return (
        <div className="container-flower">
            <img alt="sunflower" src={sunflower} className="landing-page"  />
            <div className= "l-page-group">
                <div className="centered1"><b>Zaiba Iqbal </b></div>
                <div className="logo-header centered"><b> Full Stack Engineer</b></div>
            </div>
        </div>
    )
}

export default LandingPage
