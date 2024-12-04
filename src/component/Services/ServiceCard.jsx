import React from 'react'
import "./Services.css"


const ServiceCard = ({title,description,icon}) => {
  return (
    
    <div className='service-card' style={{backgroundColor:"pink",width:"350px",height:"250px "}}>
        <div className='service-card__icon'>
            {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Read More</button>
    </div>
  )
}

export default ServiceCard