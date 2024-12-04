import React from 'react'
import ServiceCard from './ServiceCard'
import "./Services.css"
import { AiFillCheckCircle } from 'react-icons/ai'
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";



const Services = () => {
    const serviceData = [
        {
            title:"Creativliy",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            icon:<AiFillCheckCircle />
        },
        {
            title:"Development",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            icon:<AiFillGoogleCircle />
        },

        {
            title:"Management",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            icon:<AiFillGithub />
        }

    ]
  return (
    <section className='services'>
        <h1>Services Section For Everyone</h1>
        <p>Lorem Ipsum is simply dummy text of the printing
        and typesetting industry.</p>
        <div className='services__cards'>
            {serviceData.map((service,index)=>(
                <ServiceCard key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}/>
            ))}
        </div>
    </section>
  )
}

export default Services;