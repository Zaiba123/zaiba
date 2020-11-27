import React from 'react'
import hunter from '../images/hunter.png';
import ctp from '../images/ctp.jpg';
import '../styles/workAndProjects.css'
import Cards from './Cards'

const Education = () => {
    const education =
        [
            {
                name:"Hunter College",
                description:"Graduated 2020 with a Computer Science degree",
                img: hunter,
                imageTitle:"Hunter",
                linkToProject:"https://hunter.cuny.edu/",
                // linkImage: <GitHubIcon />

            },
            {
                name: "CUNY Tech Prep",
                description:  "Learn in-demand technologies like React, Node + Express, and PostgreSQL as well as industry best practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, agile & scrum with Trello and Slack, test driven development, and CI/CD",
                img: ctp,
                imageTitle:"CUNY Tech Prep",
                linkToProject:"https://cunytechprep.nyc/",
                // linkImage: <GitHubIcon />

            },
        ]
    return (
        <div className="education">
            <div className="project-body ">
                <div class="logo"><b>E<span>d</span>uc<span>a</span>t<span>i</span>on</b> </div>
                    <div className="p-cards">
                        {
                
                            education.map(item => <Cards name={item.name} description={item.description} img={item.img} classTitle={item.classTitle} imageTitle={item.imageTitle} linkToProject={item.linkToProject} linkImage={item.linkImage}/>)
                        }
                    </div>
            </div>
        </div>
    )
}

export default Education
