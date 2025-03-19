import React from 'react'

function Card({id,img,title,desc,link,tech}) {
  return (
    <div key={id} className="mycard">
            <img 
                className="mycard-img" 
                src={img}
                alt="Project Preview" 
            />
            <div className="mycard-content">
                <h3 className="mycard-title">{title}</h3>
                <p className="mycard-description">
                   {desc}
                </p>
                <div className="mycard-footer">
                    <a href={link} className="mycard-link" target="_blank">View Project</a>
                    <span className="mycard-tech">{tech}</span>
                </div>
            </div>
        </div>
  )
}

export default Card