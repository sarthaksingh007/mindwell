import React from "react";
import Homeimg from "../../asset/mindwell.svg";
import Qoute from "../Quote"
import Aboutus from "../about/About"
import Services from "../services/Services"
import FAQ from "../faq/Faq"
import Contactus from "../contactUsPage/Contact"
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate();
  const handleChange=()=>{
    navigate('/login')
  }
  return (
    <>
    <section className="home">
      <main>
        <img src={Homeimg} alt="home svg" />
      </main>
      <article>
        <h2>Your</h2>
        <span>Feel Better</span>
        <h2>Platform</h2>
        <button className="headbtn" onClick={handleChange}>EXPLORE MORE</button>
      </article>
    </section>
    <Qoute/>
    <Aboutus/>
    <Services/>
    <FAQ/>
    <Contactus/>
    </>
  );
};

export default Home;
