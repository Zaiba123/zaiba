import React from 'react'
import '../components/WorkAndProjects/workAndProjects.css'

const Cards = ({name,description,img,linkImage,linkToProject}) => {
    return (
        <div className="all-cards">
            <div className="card-project">
                <img src={img} alt="Avatar" className="image-project"/>
                <div className="container-project">
                    <h4><b><a className="project-link" href={linkToProject} > {name} </a></b></h4> 
                    <p className="project-text">{description}</p> 
                    <a className="github" href={linkToProject} > {linkImage}  </a>   
                </div>
            </div>
        </div>
    )
}

export default Cards
