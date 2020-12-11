import React from 'react';
import resume from '../images/resume.png';
import instagramLogo from '../images/instagramLogo.png';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import GitHubIcon from '@material-ui/icons/GitHub';

const ContactInfo = () =>{
    return (
        <div className="sticky2">
            <a href="https://github.com/Zaiba123" className="media-link"> <GitHubIcon fontSize="large" style={{ color:'black',marginRight:".5rem",marginLeft:".5rem",textAlign:"center"}} /></a>
            <a href="https://www.linkedin.com/in/zaiba-iqbal/" className="media-link"> <img alt="sunflower" src={linkedin } style={{ width:'35px',marginRight:".5rem",marginLeft:".5rem",textAlign:"center"}}/></a>
            <a href="mailto:zaibaiqbal1@gmail.com" className="media-link"> <img alt="email" src={email } style={{ width:'35px',marginRight:".5rem",marginLeft:".5rem",textAlign:"center"}}/></a>
            <a href="https://www.instagram.com/zfoodgal/" className="media-link"> <img alt="instagram" src={instagramLogo } style={{ width:'35px',marginRight:".5rem",marginLeft:".5rem",textAlign:"center"}} /></a>
            <a href="Zaiba_Iqbal_Resume.pdf" download title="Resume" className="media-link"><img alt="sunflower" src={resume } style={{ width:'35px',marginRight:".5rem",marginLeft:".5rem",textAlign:"center"}}/></a> 
        </div>
    )
}

export default ContactInfo
