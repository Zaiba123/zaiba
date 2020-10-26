import React from 'react'
import Layout from '../components/Layout'
// import {useStyles} from '../components/ProjectCards'
import { makeStyles } from '@material-ui/core/styles';

import ProjectCards from '../components/ProjectCards';
import inChatNito from '../images/in-chat-nito.png';
import eventurous from '../images/eventurous.png';
import noYouChoose from '../images/noYouChoose.png';
import '../styles/navbar.css'

export default function Projects() {
    const project =
        [
            {
                name:"In-chat-nito",
                description:"Application allows students who are shy to ask the teacher questions in real-time.",
                img: inChatNito,
                classTitle: 'a',
                imageTitle:"In-chat-nito"

            },
            {
                name: "Eventurous",
                description:  "Application that puts all your basic traveling needs such as currency exchange, places to visit, events happening right now and the weather forecast into one app.",
                img: eventurous,
                classTitle: "b",
                imageTitle:"Eventurous"

            },
            {
                name: "no-You-choose",
                description:"Application takes a user's current location and gives a randomized restaurant for user to try. This encourages being adventurous and trying new places to eat.",
                img:noYouChoose,
                classTitle: "c",
                imageTitle:"no-You-choose"
            },
        ]

    return (
        <Layout>
            {/* <div class="logo"><b>Z<span>a</span>i<span>b</span>a</b> </div> */}
            {/* <div className={classes.root}> */}
            <div class="logo"><b>Pr<span>o</span>j<span>ec</span>ts</b> </div>
            <div className="bg-image-project">
            {
                project.map(item => <ProjectCards name={item.name} description={item.description} picture={item.img} classTitle={item.classTitle} imageTitle={item.imageTitle}/>)
            }
            </div>
            {/* </div> */}
        </Layout>
       
    )
}
