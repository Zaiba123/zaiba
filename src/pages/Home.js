import { Button, Typography } from '@material-ui/core'
import React from 'react'
import Layout from '../components/Layout'
import SkillList from '../components/SkillList'
import Zaiba_Iqbal from '../images/Zaiba_Iqbal.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GetAppIcon from '@material-ui/icons/GetApp';
import '../components/project.css'
import Projects from './Projects';
import Goals from './Goals';

export default function Home() {
    return (
        <Layout>
            <div className="bg-image-home" style={{textAlign:"center"}}>
            <Typography variant="h3" component="h2">
                Hi, nice to meet you, I'm Zaiba
            </Typography>
                <p>
                <img alt="Profile" src={Zaiba_Iqbal}  style={{ width:'15rem', borderRadius:'5px 20px 5px'}} />
                </p>
                <a href="https://github.com/Zaiba123"> <GitHubIcon  style={{ marginRight:'1rem'}} /></a>
                <a href="https://www.linkedin.com/in/zaiba-iqbal/"> <LinkedInIcon style={{ marginRight:'1rem'}}/></a>
                <a href="mailto:zaibaiqbal1@gmail.com"> <EmailIcon /></a>
                
                <Button>  <a href="Zaiba_Iqbal_Resume.pdf" download><GetAppIcon  /></a> </Button>

                <SkillList />
                {/* <div>
                <iframe src="Zaiba_Iqbal_Resume.pdf" width = "50%" height = "500px" title="Resume" style={{textAlign:"center"}}/>
                </div> */}
                <Projects />
                <Goals />
                
            </div>
        </Layout>
    )
}
