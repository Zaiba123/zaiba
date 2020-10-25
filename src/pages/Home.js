import { GridList, GridListTile, ListItem, Typography } from '@material-ui/core'
import React from 'react'
import ImageGallery from '../components/ImageGallery'
import Layout from '../components/Layout'
import SkillList from '../components/SkillList'
import Zaiba_Iqbal from '../images/Zaiba_Iqbal.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
// import eventurous from '../images/eventurous.png'
import '../components/project.css'
import AvatarImage from '../components/AvatarImage'

export default function Home() {
    return (
        <Layout>
            <div >
            <Typography variant="h3" component="h2">
                About me
            </Typography>
                <p>Hi my name is Zaiba, I am currently trying to explore different areas of technology and </p>
                <p>
                <img src={Zaiba_Iqbal}  style={{ width:'15rem', borderRadius:'5px 20px 5px'}} />
                
                </p>
                <a href="https://github.com/Zaiba123"> <GitHubIcon  /></a>
                <a href="https://www.linkedin.com/in/zaiba-iqbal/"> <LinkedInIcon /></a>
                {/* <ListItem button key="Email" component="a" href= /> */}
                <a href="mailto:zaibaiqbal1@gmail.com"> <EmailIcon /></a>
                
                <div>
                <iframe src="Zaiba_Iqbal_Resume.pdf" width = "60%" height = "500px" title="Resume"/>
                </div>
                <a href="Zaiba_Iqbal_Resume.pdf" download>Download Resume</a>
                <p>
                </p>
                <p>Some of the things I know</p>
                <SkillList />
                <ul>
                    <li>React.js</li>
                    <li>C++</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Redux</li>
                    <li>Javascript</li>
                </ul>
           
            </div>
        </Layout>
    )
}
