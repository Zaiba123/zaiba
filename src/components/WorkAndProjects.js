import inChatNito from '../images/in-chat-nito.png';
import eventurous from '../images/eventurous.png';
import noYouChoose from '../images/noYouChoose.png';
import React from 'react'
import '../styles/workAndProjects.css'

const WorkAndProjects = () => {
    const project =
        [
            {
                name:"In-chat-nito",
                description:"Application allows students who are shy to ask the teacher questions in real-time.",
                img: inChatNito,
                imageTitle:"In-chat-nito",
                linkToProject:"https://github.com/Zaiba123/in-chat-nito",

            },
            {
                name: "Eventurous",
                description:  "Application that puts all your basic traveling needs such as currency exchange, places to visit, events happening right now and the weather forecast into one app.",
                img: eventurous,
                imageTitle:"Eventurous",
                linkToProject:"https://github.com/Zaiba123/travel_buddy",

            },
            {
                name: "no-You-choose",
                description:"Application takes a user's current location and gives a randomized restaurant for user to try. This encourages being adventurous and trying new places to eat.",
                img:noYouChoose,
                imageTitle:"no-You-choose",
                linkToProject:"https://github.com/Zaiba123/no_YOU_choose",
            },
        ]
    return (
        <div className="all-cards">
            {
                project.map(item => {
                    return(
                        <div  className="card-project">
                            <img src={item.img} alt="Avatar" className="image-project"/>
                            <div className="container-project">
                                <h4><b>{item.name}</b></h4> 
                                <p>{item.description}</p> 
                            </div>
                        </div>
                       
                    )
                })
            }
        </div>
    )
}

export default WorkAndProjects
