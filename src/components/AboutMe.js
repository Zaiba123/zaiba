import React from 'react'
import RubikCube from '../images/RubikCube.jpeg'
import crochet from '../images/crochet.jpeg'
import sunflower from '../images/sunflower.jpeg'


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
                aboutMe.map(item => <img src={item.img} alt={item.imageTitle} width="300" height="300"/>
                )
            }
        </div>
    )
}

export default AboutMe
