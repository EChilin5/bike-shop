import React from 'react'
import "./ServiceCard.scss"

interface ServiceContent{
    id:number,
    title: String,
    price: number,
    description: String,
}

const ServiceCard = (props: ServiceContent) => {

    const {id, title, price, description} = props
    
  return (
    <div className='service-card'>
        <div className='service-card-title'>{title}</div>
        <div className='service-card-price'>Starting price: {price}</div>
        <div className='service-card-desc'>{description}</div>
        <button className='service-card-btn'>Learn More</button>
    </div>
  )
}

export default ServiceCard