import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import logo from "../../asset/mindwelllogo.svg"
const Footer = () => {
  return (
    <section className="footerSection">
      <article>
        <div className="Foot1">
          <img style={{"backgroundColor":"#beaceb"}} src={logo} alt="" />
          <p>Elevate Your Mental Well-being with Mindwell</p>
          <div className="footerlinks">
            <a href="dfsbfdsf">
              <FaInstagram />
            </a>
            <a href="fdsfsfs">
              <FaFacebook />
            </a>
            <a href="sfdsfsfs">
              <FaTwitter />
            </a>
            <a href="fdsfssd">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="Foot2">
          <h3>UseFul Links</h3>
          <hr />
          <a href="fdsfs">About Us</a>
          <a href="sdffs">Services</a>
          <a href="fdsfs">LogIn/SignUp</a>
        </div>
        <div className="Foot3">
          <h1>
            CONTACT <span>DETAILS</span>
          </h1>
          <div className="details">
            <h4>
              <BsFillTelephoneFill />
              Phone: +91-7896541230
            </h4>
            <h4>
              <HiOutlineMail />
              Email: 21328@iiitu.ac.in
            </h4>
            <h4 >
              <ImLocation />
              Address: Vill. Saloh, Teh. <br /> Haroli, Distt, Una, <br /> Himachal Pradesh
              177209
            </h4>
          </div>
        </div>
      </article>
      <hr />
      <div className="right">
        <p>
          © 2023 Copyright: <b>MindWell.com</b> &nbsp;&nbsp; All rights reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
