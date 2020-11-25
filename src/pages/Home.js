import React from 'react'
import SkillList from '../components/SkillList'
import Zaiba_Iqbal from '../images/Zaiba_Iqbal.jpg';
import sunflower from '../images/sunflower.jpeg';
import instagramLogo from '../images/instagramLogo.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import '../components/project.css'
import Projects from './Projects';
import Goals from './Goals';
import '../styles/landingPage.css'
import '../styles/bio.css'

export default function Home() {
    return (
        <div className="homepage">
            <div className="bg-image-home" style={{textAlign:"center"}}>
                <div className="container">
                    {/* <img alt="landing" src={Landing_Page } className="landing-page"  /> */}
                    <img alt="stars" src={sunflower } className="landing-page"  />
                    {/* <div className="landing-page"></div> */}
                    <div class=" centered1"><b>Zaiba Iqbal </b></div>
                    <div class="logo-header centered"><b> Front-End Engineer </b></div>
                    {/* <div class="centered">Zaiba Iqbal | Front-End Engineer</div> */}
                </div>
                <div className="sticky2">
                    <a href="https://github.com/Zaiba123" className="media-link"> <GitHubIcon fontSize="large" style={{ color:'black'}} /></a>
                    <a href="https://www.linkedin.com/in/zaiba-iqbal/" className="media-link"> <LinkedInIcon fontSize="large" style={{ color:'#0072b1'}}/></a>
                    <a href="mailto:zaibaiqbal1@gmail.com" className="media-link"> <EmailIcon  fontSize="large" style={{ color:'black'}}/></a>
                    <a href="https://www.instagram.com/zfoodgal/" className="media-link"> <img alt="instagram" src={instagramLogo } style={{ width:'29px'}} /></a>
                    <a href="Zaiba_Iqbal_Resume.pdf" download title="Resume" className="media-link"><DescriptionIcon fontSize="large" style={{ color:'black'}}/></a> 
                </div>

           
                <p className="bio-container">
    
                    <img alt="Profile" src={Zaiba_Iqbal}  className="profile"  />
                    <div className="intro">
                        <b>ABOUT ME</b>
                         <br/> 
                         {/* Can do this with flex column  */}
                        Hi my Name is Zaiba, I have a passion for solving problems in creative ways as well as creating things. 
                        In my spare time I love learning new technolgies as well as improving on ones I'm currently working on. Besides coding 
                        I love crocheting and making just about anything I find online. I like being able to put my
                        creatvity into reality. To relax I love exploring the city and finding new places to eat and blog them on my page.
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
                <Projects />
                <Goals />
                
            </div>
        </div>
    )
}
