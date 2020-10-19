import React from 'react'
import Layout from '../Layout'
import ProjectCards from './ProjectCards';
import inChatNito from '../images/in-chat-nito.png'


export default function Projects({name,description,picture}) {
    const project = 
        [
            {
                name:"In-chat-nito",
                description:"Application allows students who are shy to ask the teacher questions in real-time.",
                img: <img src={inChatNito}/>

            },
            {
                name: "Eventurous",
                description:  "Application that puts all your basic traveling needs such as currency exchange, places to visit, events happening right now and the weather forecast into one app.",
                img: <img src={inChatNito}/>
            },
            {
                name: "no-You-choose",
                description:"Application takes a user's current location and gives a randomized restaurant for user to try. This encourages being adventurous and trying new places to eat.",
                img: <img src={inChatNito}/>

            },
        ]
      
        
       
    
//     const projectNames = ["In-chat-nito","Eventurous","no-YOU-choose"];
//     const description= [
//         "Application allows students who are shy to ask the teacher questions in real-time.",
//         "Application that puts all your basic traveling needs such as currency exchange, places to visit, events happening right now and the weather forecast into one app.",
//         "Application takes a user's current location and gives a randomized restaurant for user to try. This encourages being adventurous and trying new places to eat.",
// ]

    return (
        <Layout>
            {
                project.map(item => <ProjectCards name={item.name} description={item.description} picture={item.img}/>)
                
            }
            
        </Layout>
    )
}
