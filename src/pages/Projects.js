import React from 'react'
import Layout from '../components/Layout'
// import {useStyles} from '../components/ProjectCards'
import { makeStyles } from '@material-ui/core/styles';

import ProjectCards from '../components/ProjectCards';
import inChatNito from '../images/in-chat-nito.png';
import eventurous from '../images/eventurous.png';
import noYouChoose from '../images/noYouChoose.png';

const divStyles = makeStyles({
    root: {
      maxWidth: 345,
      display:"grid",
      gridTemplateAreas:"a b c",

    },
    a: {
        display:"grid",
    },
    b: {
        display:"grid",
    },
    c: {
        display:"grid",
    },
    
  });

export default function Projects() {
    const classes = divStyles();

    const project =
        [
            {
                name:"In-chat-nito",
                description:"Application allows students who are shy to ask the teacher questions in real-time.",
                img: inChatNito,
                classTitle: "a",

            },
            {
                name: "Eventurous",
                description:  "Application that puts all your basic traveling needs such as currency exchange, places to visit, events happening right now and the weather forecast into one app.",
                img: eventurous,
                classTitle: "b",

            },
            {
                name: "no-You-choose",
                description:"Application takes a user's current location and gives a randomized restaurant for user to try. This encourages being adventurous and trying new places to eat.",
                img:noYouChoose,
                classTitle: "c",
            },
        ]

    return (
        <Layout>
            <div className={classes.root}>
            {
                project.map(item => <ProjectCards name={item.name} description={item.description} picture={item.img} classTitle={item.classTitle}/>)
            }
            </div>
        </Layout>
    )
}
