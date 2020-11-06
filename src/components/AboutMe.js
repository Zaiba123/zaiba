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
                description:"N/A",
                img: RubikCube,
                imageTitle:"Rubik Cubes",
            },
            {
                name: "Crochet",
                description:  "Crochet stuffed animals, hats, scarfs, etc..",
                img: crochet,
                imageTitle:"Crochet",

            },
            {
                name: "Sunflower",
                description:"N/A",
                img:sunflower,
                imageTitle:"Sunflower",
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
