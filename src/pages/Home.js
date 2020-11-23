import { Typography } from '@material-ui/core'
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

export default function Home() {
    return (
        <div className="homepage">
            <div className="bg-image-home" style={{textAlign:"center"}}>
                <div className="container">
                    {/* <img alt="landing" src={Landing_Page } className="landing-page"  /> */}
                    <img alt="stars" src={sunflower } className="landing-page"  />
                    {/* <div className="landing-page"></div> */}
                    <div class="logo-header-1 centered1"><b>Do Something Great </b></div>
                    <div class="logo-header centered"><b>Za<span>i</span>ba  <span>Iq</span>ba<span>l  </span>| Front-End Engineer </b></div>
                    {/* <div class="centered">Zaiba Iqbal | Front-End Engineer</div> */}
                </div>
                <div className="sticky2">
                    <a href="https://github.com/Zaiba123"> <GitHubIcon fontSize="large" style={{ color:'black'}} /></a>
                    <a href="https://www.linkedin.com/in/zaiba-iqbal/"> <LinkedInIcon fontSize="large" style={{ color:'#0072b1'}}/></a>
                    <a href="mailto:zaibaiqbal1@gmail.com"> <EmailIcon  fontSize="large" style={{ color:'black'}}/></a>
                    <a href="https://www.instagram.com/zfoodgal/"> <img alt="instagram" src={instagramLogo } style={{ width:'26px'}} /></a>
                    <a href="Zaiba_Iqbal_Resume.pdf" download title="Resume"><DescriptionIcon fontSize="large" style={{ color:'black'}}/></a> 
                </div>

           
                <p>
                    <img alt="Profile" src={Zaiba_Iqbal}  className="profile" style={{ width:'17rem', borderRadius:'5px 20px 5px', marginLeft: "4rem", float:"left"}} />
                    <Typography variant="h4" component="h2"  style={{marginRight: "4rem"}}>
                        Hi my Name is Zaiba, I have a passion for solving problems in creative ways as well as creating things. 
                        In my spare time I love learning new technolgies as well as improving on ones I'm currently working on. Besides coding 
                        I love crocheting and making just about anything I find online. I like being able to put my
                        creatvity into reality. To relax I love exploring the city and finding new places to eat and blog them on my page.
                    </Typography>
                </p>
               
                {/* <div>
                <iframe src="Zaiba_Iqbal_Resume.pdf" width = "50%" height = "500px" title="Resume" style={{textAlign:"center"}}/>
                </div> */}
                <Projects />
                <Goals />
                <SkillList />
            </div>
        </div>
    )
}
