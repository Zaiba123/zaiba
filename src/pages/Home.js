import { GridList, GridListTile, Typography } from '@material-ui/core'
import React from 'react'
import ImageGallery from '../components/ImageGallery'
import Layout from '../components/Layout'
// import eventurous from '../images/eventurous.png'
import '../components/project.css'

export default function Home() {
    return (
        <Layout>
            <div className="bg-image-home">
            <Typography variant="h3" component="h2">
                About me
            </Typography>
                <p>Hi my name is Zaiba, I am currently trying to explore different areas of technology and </p>
                <div>
                <iframe src="Zaiba_Iqbal_Resume.pdf" width = "50%" height = "500px"/>
                </div>
                <a href="Zaiba_Iqbal_Resume.pdf" download>Download Resume</a>
                <ImageGallery />

                <p>Some of the things I know</p>
                <ul>
                    <li>React.js</li>
                    <li>C++</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Redux</li>
                    <li>Javascript</li>
                </ul>
           
            </div>
        </Layout>
    )
}
