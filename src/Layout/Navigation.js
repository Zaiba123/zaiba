import React from 'react'
import { Link } from "react-scroll"
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const Navigation =()=> {
    return (
        <nav>
        <ul>
          <li>
          <Link
            className='link'
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="home"><HomeIcon /> </span></Link>
        </li>
        <li>
          <Link
            className='link'
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="projects"><ComputerIcon /></span></Link>
        </li>
        <li>
          <Link
            className='link'
            activeClass='active'
            to='aboutme'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
          <span role="img" aria-label="aboutme"><EmojiPeopleIcon /></span></Link>
        </li>
      </ul>
        </nav>
    )
}

export default Navigation
