import React from 'react'
import '../components/WorkAndProjects/workAndProjects.css'

const Cards = ({name,description,img,linkImage,imageTitle,linkToProject,linkText}) => {
    return (
        <div className="all-cards">
            {
                <div className="card-project">
                    <img src={img} alt="Avatar" className="image-project"/>
                    <div className="container-project">
                        <h4><b><a href={linkToProject} > {name} </a></b></h4> 
                        <p>{description}</p> 
                        <a href={linkToProject} > {linkImage}  </a>   
                    </div>
                </div>
            }
        </div>
    )
}

export default Cards
