import React from 'react';
import SkillList from '../SkillList/SkillList'
import Zaiba_Iqbal from '../../images/Zaiba_Iqbal.jpg';

import '../../components/Bio/bio.css'

const Bio = () => {
    return (
        <div className="bio-container">
            <img alt="Profile" src={Zaiba_Iqbal}  className="profile"  />
            <div className="intro">
                <b>ABOUT ME</b>
                <br/> 
                Hi my name is Zaiba, I have a passion for solving problems in creative ways as well as creating things. 
                In my spare time I love learning new technologies as well as improving on ones I'm currently working on. Besides coding 
                I love crocheting by making just about anything I find online. I like being able to put my
                creatvity into reality. To relax I love exploring the city and finding new places to eat and blog them on my instagram page. A fun fact about me is that I can solve a rubik cube in less than 30 seconds.
                <br/>
                <b> Here are some of my technical skills: </b>
                <SkillList className="skill-list"/>
            </div>
        </div>
    )
}

export default Bio
