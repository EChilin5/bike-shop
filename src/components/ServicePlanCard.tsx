import React from 'react'
import "./ServicePlanCard.scss"


interface ServicePlanDetails{
    id:number,
    title:String,
    price:String, 
    description:String,
}

const ServicePlanCard = (props:ServicePlanDetails) => {
    const {id, title, price, description} = props
  return (
    <div className='service-card-plan'>
        <div className='service-card-plan-title'>
            {title}
        </div>
        <div className='service-card-plan-price'>
          <div>Starting Price: </div><div className='service-card-plan-price-color'>{price}</div></div>
        <div className='service-card-plan-description'>{description}</div>
    </div>
  )
}

export default ServicePlanCard