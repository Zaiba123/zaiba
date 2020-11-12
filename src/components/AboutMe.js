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
                img: RubikCube,
                imageTitle:"Rubik Cubes",
            },
            {
                name: "Crochet",
                img: crochet,
                imageTitle:"Crochet",

            },
            {
                name: "Sunflower",
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
