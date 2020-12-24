import React from 'react'
import hunter from '../images/hunter.png';
import ctp from '../images/ctp.jpg';
import '../components/WorkAndProjects/workAndProjects.css'
import Cards from './Cards'

const Education = ({style}) => {
    const education =
        [
            {
                name:"Hunter College",
                description:"Graduated in 2020 with a Computer Science degree. Took classes such as Database Management, Cloud Computing, Software Engineering, Web Development, as well as Data structures and Algorithms.",
                img: hunter,
                imageTitle:"Hunter",
                linkToProject:"https://hunter.cuny.edu/",

            },
            {
                name: "CUNY Tech Prep",
                description:  "Learned in-demand technologies like React, Node + Express, and PostgreSQL as well as industry best practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, agile & scrum with Trello and Slack, test driven development, and CI/CD.",
                img: ctp,
                imageTitle:"CUNY Tech Prep",
                linkToProject:"https://cunytechprep.nyc/",
                

            },
        ]
    return (
        <div className="education">
            <div className="project-body " style={style}>
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
