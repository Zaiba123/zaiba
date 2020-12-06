import React from 'react'
import SkillList from '../components/SkillList'
import Zaiba_Iqbal from '../images/Zaiba_Iqbal.jpg';
import sunflower from '../images/sunflower.jpeg';
import resume from '../images/resume.png';
import instagramLogo from '../images/instagramLogo.png';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../components/project.css'
import '../styles/landingPage.css'
import '../styles/bio.css'
import WorkAndProjects from '../components/WorkAndProjects';
import Education from '../components/Education';

export default function Home() {
    return (
        <div className="homepage">
            <div className="bg-image-home" style={{textAlign:"center"}}>
                <div className="container-flower">
                    <img alt="sunflower" src={sunflower } className="landing-page"  />
                    <div className= "l-page-group">
                        <div className=" centered1"><b>Zaiba Iqbal </b></div>
                        <div className="logo-header centered"><b> Front-End Engineer</b></div>
                    </div>
                </div>
                <div className="sticky2">
                    <a href="https://github.com/Zaiba123" className="media-link"> <GitHubIcon fontSize="large" style={{ color:'black',marginRight:".5rem",marginLeft:".5rem",textAlign:"center"}} /></a>
                    <a href="https://www.linkedin.com/in/zaiba-iqbal/" className="media-link"> <img alt="sunflower" src={linkedin } style={{ width:'35px',marginRight:".5rem",marginLeft:".5rem",textAlign:"center"}}/></a>
                    <a href="mailto:zaibaiqbal1@gmail.com" className="media-link"> <img alt="email" src={email } style={{ width:'35px',marginRight:".5rem",marginLeft:".5rem",textAlign:"center"}}/></a>
                    <a href="Zaiba_Iqbal_Resume.pdf" download title="Resume" className="media-link"><img alt="sunflower" src={resume } style={{ width:'35px',marginRight:".5rem",marginLeft:".5rem",textAlign:"center"}}/></a> 

                    <a href="https://www.instagram.com/zfoodgal/" className="media-link"> <img alt="instagram" src={instagramLogo } style={{ width:'35px',marginRight:".5rem",marginLeft:".5rem",textAlign:"center"}} /></a>
                </div>

           
                <p className="bio-container">
    
                    <img alt="Profile" src={Zaiba_Iqbal}  className="profile"  />
                    <div className="intro">
                        <b>ABOUT ME</b>
                         <br/> 
                        Hi my name is Zaiba, I have a passion for solving problems in creative ways as well as creating things. 
                        In my spare time I love learning new technolgies as well as improving on ones I'm currently working on. Besides coding 
                        I love crocheting by making just about anything I find online. I like being able to put my
                        creatvity into reality. To relax I love exploring the city and finding new places to eat and blog them on my instagram page. A fun fact about me is that I can solve a rubik cube in less than 30 seconds.
                        <br/>
                        <b> Here are some of my technical skills: </b>
                        <SkillList className="skill-list"/>
               
                    </div>
                </p>
                
                {/* <div>
                <iframe src="Zaiba_Iqbal_Resume.pdf" width = "50%" height = "500px" title="Resume" style={{textAlign:"center"}}/>
                </div> */}
                <br/>
                <br />
                <WorkAndProjects />
                <Education />
                {/* <AboutMe /> */}
                
            </div>
        </div>
    )
}
