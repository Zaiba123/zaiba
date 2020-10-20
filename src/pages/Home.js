import React from 'react'
import Layout from '../components/Layout'
// import eventurous from '../images/eventurous.png'


export default function Home() {
    return (
        <Layout>
        <div>
        <h3>About me </h3>
        <p>Hi my name is Zaiba, I am currently trying to explore different areas of technology and </p>
        <a href="Zaiba_Iqbal_Resume.pdf" download>Resume</a>
        <iframe src="Zaiba_Iqbal_Resume.pdf" width = "50%" height = "500px"/>


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
