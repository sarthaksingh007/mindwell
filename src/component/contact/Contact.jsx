import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
const Contact = () => {
  return (
    <section className="contactus">
      <article>
        <div className="divv1">
          <h1>
            GET <span>IN</span> TOUCH
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
            <h4>
              <ImLocation />
              Address: Vill. Saloh, Teh. Haroli, Distt, Una, Himachal Pradesh
              177209
            </h4>
          </div>
          <div className="contact1">
            <form action="">
              <div className="outer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin:'0 24rem 0 22rem'
                }}
              >
                <div className="inner"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "space-between",
                  }}
                >
                  <label htmlFor="">Name:</label>
                  <input type="text" name="" id="" placeholder="YOUR NAME" />
                  <label htmlFor="">Email-address:</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="YOUR EMAIL ADDRESS"
                  />
                  <label htmlFor="">Phone-Number:</label>
                  <input
                    type="tel"
                    name=""
                    id=""
                    placeholder="YOUR PHONE NUMBER"
                  />
                </div>
                <div className="inner2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "space-between",
                  }}
                >
                  <label htmlFor="">Message:</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="YOUR MESSAGE"
                  />
                </div>
              </div>
              <button className="submitbtn" type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
