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
            <div class="logo"><b>Get to know me</b></div>

            {
                aboutMe.map(item => <div><img src={item.img} alt={item.imageTitle} width="300" height="300"/></div>
                )
            }
        </div>
    )
}

export default AboutMe
