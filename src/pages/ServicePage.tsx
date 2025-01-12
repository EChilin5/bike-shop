import React from "react";
import bike from "../image/bike_fix.png";
import "./ServicePage.scss";
import ServicePlanCard from "../components/ServicePlanCard";

const ServicePage = () => {
  const plans = [
    {
      id: 0,
      title: "Single",
      price: "Varies",
      descritpion:
        "Whether you need a brake adjustment, gear tuning, wheel truing, chain replacement, or any other specific service, we've got you covered. Our team is experienced in working with all types of bikes, from single speed to multi-speed, road, mountain, and hybrid bikes",
    },
    {
      id: 1,
      title: "Basic",
      price: "$60",
      descritpion:
        "Get ready to enhance your cycling experience with our Basic Essential Tune-Up Package. Our skilled technicians will perform a comprehensive inspection, precise adjustments, wheel truing, chain lubrication, and a thorough safety check. Rediscover the joy of riding with a finely tuned bike. Schedule your appointment today! Limited availability, so book now!",
    },
    {
      id: 2,
      title: "Special",
      price: "$120",
      descritpion:
        "Our skilled technicians will revitalize your ride with a thorough inspection, precise adjustments, wheel truing, chain lubrication, and a comprehensive safety check. Join our satisfied customers and schedule your tune-up today to enjoy a smoother, safer, and more enjoyable cycling experience. Get in touch with us now to book your spot!",
    },
    {
      id: 3,
      title: "Overhaul",
      price: "$160",
      descritpion:
        "Our Overhaul service offers a comprehensive inspection, cleaning, and reconditioning to ensure your bike performs like new. Experience unmatched performance and reliability. Schedule your Complete Overhaul Tune-Up today for the ultimate riding experience! Limited availability, so book now!",
    },
  ];

  return (
    <div className="service-hero">
      <img src={bike} alt="bike source" width="100%" />
      <div className="service-overlay">
        <div className="service-hero-title">Our Services</div>
        <div className="service-hero-content">
          Maximize your ride with Vic's Bikes Tune-Up and Service! Our expert
          team offers comprehensive tune-up packages and individual services to
          keep your bike in peak condition. 
        </div>
      </div>

      <div className="service-content">
        <div className="service-content-item">
          {" "}
          <ServicePlanCard
            id={plans[0].id}
            title={plans[0].title}
            price={plans[0].price}
            description={plans[0].descritpion}
          />
        </div>
        <div className="service-content-item">
          <ServicePlanCard
            id={plans[1].id}
            title={plans[1].title}
            price={plans[1].price}
            description={plans[1].descritpion}
          />
        </div>
      </div>
      <div className="service-content">
        <div className="service-content-item">
          <ServicePlanCard
            id={plans[2].id}
            title={plans[2].title}
            price={plans[2].price}
            description={plans[2].descritpion}
          />
        </div>
        <div className="service-content-item">
          <ServicePlanCard
            id={plans[3].id}
            title={plans[3].title}
            price={plans[3].price}
            description={plans[3].descritpion}
          />
        </div>
      </div>

      <div className="service-call-number">
        Book an Appointment @ 123-456-7890
      </div>
      <div className="service-fine-print">
        Please note that pricing for our services may vary depending on the
        specific needs of your bike and any additional components or parts
        required. At Vic's Bikes, we strive to provide fair and competitive
        pricing while ensuring the highest quality of service.
      </div>
    </div>
  );
};

export default ServicePage;
