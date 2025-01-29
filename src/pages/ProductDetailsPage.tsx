import React from 'react'
import bike from "../image/roadbike.png"

const ProductDetailsPage = () => {
  return (
    <div>
    <div className="product-desc-hero">
      <div className="product-desc-hero-left">
        <img src={bike} alt="roaf bike" />
      </div>
      <div className="product-desc-hero-right">
        <div>Mountain Tail Blaze</div>
        <div>$100.00</div>
        <div>
          Quanity <input type="number" placeholder="1" />
        </div>
        <button>Buy Now</button>
        <button>Add To Card</button>
      </div>
    </div>
    <div className="product-desc-info">
      <div>Description:</div>
      <div>
        Get ready to ride like a pro with the Lightning Pro Carbon Road
        Bike—engineered for speed, precision, and endurance. Whether you're
        training for your next race, tackling long-distance rides, or cruising
        scenic routes
      </div>
      <div>Key Features</div>
      <div>
      <p>
          **Lightweight Carbon Fiber Frame**: Weighing just 7.8 kg (17.2 lbs),
          the carbon frame provides the perfect balance between durability and
          agility for effortless climbing and smooth acceleration.
        </p>
        <p>
          **Shimano 105 Groupset**: Experience smooth, reliable shifting with
          Shimano’s 22-speed drivetrain, designed for seamless transitions on
          both flats and hills.
        </p>
        <p>
          **Aerodynamic Design**: The streamlined frame and internally-routed
          cables reduce drag, giving you that extra edge when you need to go
          faster.
        </p>
      </div>
    </div>
  </div>
  )
}

export default ProductDetailsPage