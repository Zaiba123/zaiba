import React from 'react'
import { Link } from "react-scroll"
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

import '../styles/navigation.css';

const Navigation =()=> {
    return (
        <nav className="sticky">
          <Link
            className='navlink'
            activeClass='active'
            to='homepage'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="home"><HomeIcon /> </span></Link>
          <Link
            className='navlink'
            activeClass='active'
            to='project-body'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="projects"><ComputerIcon /></span></Link>
          <Link
            className='navlink'
            activeClass='active'
            to='aboutme'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="aboutme"><EmojiPeopleIcon /></span></Link>
        </nav>
    )
}

export default Navigation
