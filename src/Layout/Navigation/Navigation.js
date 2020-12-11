import React from 'react'
import { Link } from "react-scroll"
import education from '../../images/education.webp';
import project from '../../images/project.png';
import home from '../../images/home.png';
import bio from '../../images/bio.webp';

import '../Navigation/navigation.css';

const Navigation = () => {
    return (
        <nav className="sticky1">
          <Link
            className='navlink'
            activeClass='active'
            to='homepage'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="home"><img alt="homepage" src={home } style={{ width:'35px',height:"35px"}} /></span></Link>
          <Link
            className='navlink'
            activeClass='active'
            to='bio-container'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <spanbi role="img" aria-label="bio"><img alt="bio" src={bio } style={{ width:'35px',height:"35px"}} /></spanbi></Link>
          <Link
            className='navlink'
            activeClass='active'
            to='project-body'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="projects"><img alt="bio" src={project } style={{ width:'35px',height:"35px"}} /></span></Link>
          <Link
            className='navlink'
            activeClass='active'
            to='education'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="aboutme"><img alt="education" src={education } style={{ width:'39px',height:"35px"}}/></span></Link>
        </nav>
    )
}

export default Navigation
