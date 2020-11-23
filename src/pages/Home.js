// import { Typography } from '@material-ui/core'
import React from 'react'
import SkillList from '../components/SkillList'
import Zaiba_Iqbal from '../images/Zaiba_Iqbal.jpg';
import Landing_Page from '../images/doSomethingGreat.jpeg';
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
                    <img alt="landing" src={Landing_Page } className="landing-page"  />
                    <div class="logo-header centered"><b>Za<span>i</span>ba  <span>Iq</span>ba<span>l  </span>| Front-End Engineer</b></div>
                    {/* <div class="centered">Zaiba Iqbal | Front-End Engineer</div> */}
                </div>

            {/* <Typography variant="h3" component="h2">
                Hi, nice to meet you, I'm Zaiba, welcome to my page
            </Typography> */}
                <p>
                <img alt="Profile" src={Zaiba_Iqbal}  style={{ width:'15rem', borderRadius:'5px 20px 5px'}} />
                </p>
                <div>
                    <a href="https://github.com/Zaiba123"> <GitHubIcon  style={{ color:'black'}} /></a>
                    <a href="https://www.linkedin.com/in/zaiba-iqbal/"> <LinkedInIcon style={{ color:'#0072b1'}}/></a>
                    <a href="mailto:zaibaiqbal1@gmail.com"> <EmailIcon style={{ color:'black'}}/></a>
                    <a href="Zaiba_Iqbal_Resume.pdf" download title="Resume"><DescriptionIcon  style={{ color:'black'}}/></a> 
                </div>
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
