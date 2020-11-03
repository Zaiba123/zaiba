import React from 'react'
import RubikCube from '../images/RubikCube.jpeg'
import crochet from '../images/crochet.jpeg'
import sunflower from '../images/sunflower.jpeg'
import ProjectCards from './ProjectCards'


const AboutMe = () => {
    const aboutMe =
        [
            {
                name:"Rubik Cubes",
                description:"Application allows students who are shy to ask the teacher questions in real-time.",
                img: RubikCube,
                imageTitle:"Rubik Cubes",
            },
            {
                name: "Crochet",
                description:  "Application that puts all your basic traveling needs such as currency exchange, places to visit, events happening right now and the weather forecast into one app.",
                img: crochet,
                imageTitle:"Crochet",

            },
            {
                name: "Sunflower",
                description:"Application takes a user's current location and gives a randomized restaurant for user to try. This encourages being adventurous and trying new places to eat.",
                img:sunflower,
                imageTitle:"sunflower",
            },
        ]

    return (
        <div>
            {
                aboutMe.map(item => <ProjectCards name={item.name} picture={item.img} imageTitle={item.imageTitle} />)
            }
        </div>
    )
}

export default AboutMe
