import React,{useState} from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile:'',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validation = () => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobilepattern= /^\d{10}$/;

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter correct Email ID';
    }
    
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile Number is required';
    }
    else if(!mobilepattern.test(formData.mobile)){
      newErrors.mobile ="Please Enter correct mobile number,"
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    } 
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendmessage = async (e) => {
    e.preventDefault();
  
    if (validation()) {
      try {
        const response = await fetch('http://localhost:5000/sendmessage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(formData),
        });
  
        if (response.status === 200) {
          const data = await response.json();
  
          if (data === 'true') {
            alert("Your Message has been successfully send!...")
            setFormData({
              name: '',
              email: '',
              mobile:'',
              message: '',
            });
          }
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
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
                  <input type="text" name="name" placeholder="YOUR NAME" onChange={handleChange} value={formData.name}/>
                  {errors.name && (<span className="spanError">{errors.name}</span>)}

                  <label htmlFor="">Email-address:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="YOUR EMAIL ADDRESS"
                    onChange={handleChange}
                    value={formData.email}
                  />
                  {errors.email && (<span className="spanError">{errors.email}</span>)}
                  <label htmlFor="">Phone-Number:</label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="YOUR PHONE NUMBER"
                    onChange={handleChange}
                    value={formData.mobile}
                  />
                  {errors.mobile && (<span className="spanError">{errors.mobile}</span>)}
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
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="YOUR MESSAGE"
                    onChange={handleChange}
                    value={formData.message}
                  />
                   {errors.message && (<span className="spanError">{errors.message}</span>)}
                </div>
              </div>
              <button className="submitbtn" type="submit" onClick={(e)=>{sendmessage(e)}}>SUBMIT</button>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
