import inChatNito from '../../images/in-chat-nito.png';
import eventurous from '../../images/eventurous.png';
import noYouChoose from '../../images/noYouChoose.png';
import cupswork from '../../images/cupswork.png';
import pfizer from '../../images/pfizer.png';
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import './workAndProjects.css'
import Cards from '../../components/Cards';


const WorkAndProjects = ({style}) => {
    const project =
        [
            {
                name:"In-chat-nito",
                description:"Application allows students who are shy to ask the teacher questions in real-time. Used React.js as well as socket.io to create real time chat rooms for students to ask questions in anonymously.",
                img: inChatNito,
                imageTitle:"In-chat-nito",
                linkToProject:"https://github.com/Zaiba123/in-chat-nito",
                linkImage: <GitHubIcon />,
                linkText: "Click to view code"

            },
            {
                name: "Eventurous",
                description:  "Application that puts all your basic traveling needs such as currency exchange, places to visit, events happening right now and the weather forecast into one app. Utilized React.js, Open Weather API, Geolocation, recharts, HTML and CSS to display weekly weather conditions dependent on a persons location.",
                img: eventurous,
                imageTitle:"Eventurous",
                linkToProject:"https://github.com/Zaiba123/travel_buddy",
                linkImage: <GitHubIcon />,
                linkText: "Click to view code"

            },
            {
                name: "no-You-choose",
                description:"Application takes a user's current location and gives a randomized restaurant for user to try. This encourages being adventurous and trying new places to eat. Used Google Places API and React.js to display different restraunts based on your preference and location.",
                img:noYouChoose,
                imageTitle:"no-You-choose",
                linkToProject:"https://github.com/Zaiba123/no_YOU_choose",
                linkImage: <GitHubIcon />,
                linkText: "Click to view code"


            },
            {
                name: "Pfizer",
                description:"Conducted user research with 4 people of prioritized proposed features to build a functioning Figma prototype of social media enhancements for the Cancer patient app “Living With”, in order to present to senior management an updated version of the app that would better connect the Cancer patient community.",
                img: pfizer,
                imageTitle:"Business Technology Intern",
                linkToProject:"https://www.pfizer.com/",
            },
            {
                name: "Cups",
                description:"Implemented user experience updates over website and email that went into production using ​React.js, Typescript, CSS,​ and HTML​ in order to inform the customer of company updates such as new features or programs.",
                img: cupswork,
                imageTitle:"Software Developer Intern",
                linkToProject:"https://cupsworks.com/",
                

            },
        ]
    return (
        <div  className="project-body " style={style}>
        <div class="logo"><b className="b-class">W<span>o</span>r<span>k</span><span>+</span></b> <b>Pr<span>o</span>j<span>ec</span>ts</b> </div>
        <div className="p-cards">
            {
    
                project.map(item => <Cards name={item.name} description={item.description} img={item.img} classTitle={item.classTitle} imageTitle={item.imageTitle} linkToProject={item.linkToProject} linkImage={item.linkImage} linkText={item.linkText}/>)
            }
        </div>
        </div>
    )
}

export default WorkAndProjects
