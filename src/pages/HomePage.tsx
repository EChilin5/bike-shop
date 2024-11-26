import React from "react";
import "./HomePage.scss";
import landing from "../image/hero-1.png";
import ServiceCard from "../components/ServiceCard";
import testimony from "../image/testimonials-7.png";
import { WhyCard } from "../components/WhyCard";

const HomePage = () => {
  let service = [
    {
      id: 0,
      title: "Basic",
      price: 80,
      description:
        "Experience the Chill’s Bikes o Tune-Up Package: Elevate Your Ride!",
    },
    {
      id: 1,
      title: "Chill's Special",
      price: 100,
      description:
        "Experience the transformative power of our popular Tune-Up Package at Chill’s Bikes!",
    },
    {
      id: 2,
      title: "Overhaul",
      price: 160,
      description:
        "Elevate your ride to perfection with the Chill’s Bikes Complete Overhaul Tune-Up Package!",
    },
  ];

  let cards = [1,2,3];

  return (
    <div>
      <div className="home-hero">
        <div className="home-hero-image">
          <img src={landing} alt="landing page" />
        </div>
        <div className="home-hero-content">
          <div className="home-hero-content-title">Chill’s Bike Shop</div>
          <div className="home-hero-content-description">
            We offer a wide range of services, including bike repairs, parts,
            and accessories, catering to all levels of riders, from Pomona,
            Walnut, and Chino Hills
          </div>
        </div>
      </div>
      <div className="home-about">
        <div className="home-about-title">About Us</div>
        <div className="home-about-desc">
          Welcome to your local, family-owned bike shop, dedicated to quality
          service for students, families, and riders of all levels. Conveniently
          near Cal Poly Pomona and Mt. San Antonio College, we offer everything
          from kids' bikes to high-end mountain bikes, plus expert repairs and
          rebuilds.{" "}
        </div>
      </div>
      <div className="home-services">
        <div className="home-services-title">Our Services</div>
        <div className="home-services-card">
          {service.map((data) => {
            return (
              <div key={data.id}>
                <ServiceCard
                  id={data.id}
                  title={data.title}
                  price={data.price}
                  description={data.description}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="home-testimony">
        <div className="home-testimony-hero">
          <img src={testimony} alt="bike background" />
        </div>
        <div className="home-testimony-cover">
          <div className="home-testimony-title">Testimony</div>
          <div className="home-testimony-desc">
            I took my bike to Chill’s Bikes for repair and was blown away by the
            level of service I received. The technician was incredibly skilled
            and knowledgeable, quickly diagnosing and fixing the problem while
            also showing me how to prevent it in the future. I highly recommend
            Vic's Bikes for any bike repair needs, 5 out of 5 stars!
          </div>
        </div>
      </div>
      <div className="home-why-section">
        <h3>Why Choose Us</h3>
        <h5>
          {" "}
          personalized service, expert repairs, quality products, and a
          community-driven experience
        </h5>
        <div className="home-why-section-items">
          {cards.map(data=>{
            return <div> <WhyCard/></div>
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
