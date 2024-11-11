import React from "react";
import aboutimg from "../../assets/img/about.jpg";
import "./about.css";
import icon1 from "../../assets/img/service-3.jpg";
import icon2 from "../../assets/img/service-4.jpg";

const About = () => {
  return (
    
      <div className="about">
        <img src={aboutimg} alt="" />
        <div className="aboutdetails">
          <h5>about us</h5>
          <h3>Quick Transport and Logistics Solutions</h3>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="icon">
            <div className="icon1">
              <img src={icon1} alt="" />
              <h1>Global Coverage</h1>
              <p>
                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                diam justo.
              </p>
            </div>
            <div className="icon2">
              <img src={icon2} alt="" />
              <h1>On Time Delivery</h1>
              <p>
                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                diam justo.
              </p>
            </div>
          </div>
          <button>Explore More</button>
        </div>
      </div>
      
    
  );
};

export default About;
