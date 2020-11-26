import React from 'react'
import '../styles/workAndProjects.css'

const Cards = ({name,description,img,linkImage,imageTitle,linkToProject}) => {
    return (
        <div className="all-cards">
            {
                <div className="card-project">
                    <img src={img} alt="Avatar" className="image-project"/>
                    <div className="container-project">
                        <h4><b>{name}</b></h4> 
                        <p>{description}</p> 
                        <a href={linkToProject} > {linkImage} Click to view code</a>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cards
