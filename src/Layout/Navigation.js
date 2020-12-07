import React from 'react'
import { Link } from "react-scroll"
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import education from '../images/education.jpg';

import '../styles/navigation.css';

const Navigation =()=> {
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
          <span role="img" aria-label="home"><HomeIcon style={{ width:'35px',height:"35px"}}/> </span></Link>
          <Link
            className='navlink'
            activeClass='active'
            to='project-body'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="projects"><ComputerIcon style={{ width:'35px',height:"35px"}} /></span></Link>
          <Link
            className='navlink'
            activeClass='active'
            to='education'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="aboutme"><img alt="sunflower" src={education } style={{ width:'39px',height:"35px"}}/></span></Link>
        </nav>
    )
}

export default Navigation
