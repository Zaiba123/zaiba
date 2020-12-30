import React from 'react';
import SkillList from '../SkillList/SkillList'
import Zaiba_Iqbal from '../../images/Zaiba_Iqbal.jpg';

import '../../components/Bio/bio.css'

const Bio = () => {
    return (
        <div><div className="aboutme-title"><b>A<span>b</span>ou<span>t</span> M<span>e</span></b></div>
        <div className="bio-container">
            <img alt="Profile" src={Zaiba_Iqbal}  className="profile"  />
            <div className="intro">
                Hi my name is Zaiba, I love solving problems in creative ways as well as creating things. 
                In my spare time I love learning new technologies as well as improving on ones I'm currently working on. Besides coding 
                I love crocheting by making just about anything I find online such as scarfs, sweaters or stuffed animals. I like being able to put my
                creatvity into reality. In my spare time I love exploring the city and finding new places to eat and blog them on my instagram page. A fun fact about me is that I can solve a rubik cube in less than 30 seconds.
                <br/>
                <div className="aboutme-technicalskills "> Here are some of my technical skills: </div>
                <SkillList className="skill-list"/>
            </div>
        </div>
        </div>
    )
}

export default Bio
