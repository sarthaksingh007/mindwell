import React from "react";
import About1 from "../asset/about1.svg";
// import Abouts from "../asset/about.webp";
const About = () => {
  return (
    <section className="aboutus">
      <main>
        <h2>About <span>Us</span></h2>
        <div className="about1">
          <div className="aboutpara1">
            Welcome to Mindwell, your trusted companion on the journey to mental
            well-being and mindfulness. We understand that in today's fast-paced
            world, stress and anxiety can often take a toll on your mental
            health. That's why we've created Mindwell – a powerful tool designed
            to help you find inner peace, reduce stress, and boost your overall
            well-being.
          </div>
          <div className="imagesection1">
            <img src={About1} alt="about us" />
          </div>
        </div>
        
      </main>
    </section>
  );
};

export default About;
