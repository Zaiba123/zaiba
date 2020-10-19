import React from 'react'
import Layout from '../Layout'
import ProjectCards from './ProjectCards';


export default function Projects({name}) {
    const projectNames = ["In-chat-nito","Eventurous","no-YOU-choose","One Word at a Time"];

    return (
        <Layout>
            {
                    projectNames.map(name => <ProjectCards name={name} />)
                
            }
            
        </Layout>
    )
}
