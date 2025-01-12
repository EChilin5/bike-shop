import React from "react";
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">Connect With Us</div>
      <div className="footer-grid">
        <div className="footer-grid-right">
          <div>
            Stay up-to-date with the latest news, products, and also promotions
            by following us on social media or subscribing to our newsletter.
          </div>
        </div>

        <div className="footer-grid-mid">
          <div className="footer-mid-location">
            <div>Our Location:</div>
            <div>3503 W Temple Ave Unit I, Pomona, CA 91768</div>
            <div>Phone number:</div>
            <div>123-456-7890</div>
            <div>Email</div>
            <div>test@bike.com</div>
          </div>
        </div>
        <div className="footer-grid-left">
            <div>Hours of Operation</div>
            <div>Monday: 9am-5pm</div>
            <div>Tuesday: 9am-5pm</div>
            <div>Wednesday: 9am-5pm</div>
            <div>Thursday: 9am-5pm</div>
            <div>Friday: 9am-5pm</div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
