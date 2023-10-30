import React, { useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Delighted from "../../asset/delighted.png";
import Good from "../../asset/good.png";
import Okay from "../../asset/okay.png";
import NotGreat from "../../asset/notgreat.png";
import Overwhelmed from "../../asset/overwhelmed.png";
import {useNavigate} from "react-router-dom"
import "../../style/radio.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #ccc",
  boxShadow: 24,
  p: 4,
};

const Choice = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleBothClicks = (e) => {
    handleMoodTopic(e);
    handleOpen();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    mood: "",
    topic: "",
  });
  const handleMoodTopic = async (e) => {
    e.preventDefault();
    console.log("Users", formData.mood, formData.topic);
    try {
      let result = await fetch("http://localhost:5000/getmoodandtopic", {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // added the session
      });
      result = await result.json();
      console.log(result);
      navigate('/user');
    } catch (error) {
      console.error(error); //only print the error
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="1">
        <h2 className="headingchoice">
          Select your <span className="headingspan">mood</span>
        </h2>

        <div className="container1">
          <div className="radio-tile-group">
            <div className="input-container">
              <input id="Delighted" type="radio" name="radio" />
              <div className="radio-tile">
                <img
                  style={{ width: "50px", padding: "12px" }}
                  src={Delighted}
                  alt=""
                />
                <label htmlFor="Delighted" style={{ padding: "0 5px 0 5px" }}>
                  Delighted
                </label>
              </div>
            </div>

            <div className="input-container">
              <input id="Good" type="radio" name="radio" />
              <div className="radio-tile">
                <img
                  style={{ width: "50px", padding: "12px" }}
                  src={Good}
                  alt=""
                />
                <label htmlFor="Good" style={{ padding: "0 5px 0 5px" }}>
                  Good
                </label>
              </div>
            </div>

            <div className="input-container">
              <input id="Okay" type="radio" name="radio" />
              <div className="radio-tile">
                <img
                  style={{ width: "50px", padding: "12px" }}
                  src={Okay}
                  alt=""
                />
                <label htmlFor="Okay" style={{ padding: "0 5px 0 5px" }}>
                  Okay
                </label>
              </div>
            </div>

            <div className="input-container">
              <input id="Notgreat" type="radio" name="radio" />
              <div className="radio-tile">
                <img
                  style={{ width: "50px", padding: "12px" }}
                  src={NotGreat}
                  alt=""
                />
                <label
                  htmlFor="Notgreat"
                  style={{ padding: "0 5px 0 5px", textAlign: "center" }}
                >
                  Not great
                </label>
              </div>
            </div>

            <div className="input-container">
              <input id="Overwhelmed" type="radio" name="radio" />
              <div className="radio-tile">
                <img
                  style={{ width: "50px", padding: "12px" }}
                  src={Overwhelmed}
                  alt=""
                />
                <label
                  htmlFor="Overwhelmed"
                  style={{ padding: "0 35px 0 35px", textAlign: "center" }}
                >
                  overwhelm
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="2">
        <h2 className="headingchoice">
          Select your <span className="headingspan">Topic</span>
        </h2>

        <div className="container1">
          <div className="radio-tile-group">
            <div className="input-container">
              <input id="family-friend" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="family-friend" style={{ textAlign: "center" }}>
                  Family & Friends
                </label>
              </div>
            </div>

            <div className="input-container">
              <input id="Relationship" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Relationship" style={{ textAlign: "center" }}>
                  Relationship
                </label>
              </div>
            </div>

            <div className="input-container">
              <input id="Academics" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Academics" style={{ textAlign: "center" }}>
                  Academics
                </label>
              </div>
            </div>

            <div className="input-container">
              <input id="ProfessionalLife" type="radio" name="radio" />
              <div className="radio-tile">
                <label
                  htmlFor="ProfessionalLife"
                  style={{ textAlign: "center", padding: "0 5px 0 5px" }}
                >
                  Professional Life
                </label>
              </div>
            </div>

            <div className="input-container">
              <input id="Covid-19" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Covid-19" ststyle={{ textAlign: "center" }}>
                  Covid-19
                </label>
              </div>
            </div>

            <div className="input-container">
              <input id="Self" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Self" ststyle={{ textAlign: "center" }}>
                  Self
                </label>
              </div>
            </div>

            <div className="input-container">
              <input id="Justtalk" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Justtalk" ststyle={{ textAlign: "center" }}>
                  Just talk
                </label>
              </div>
            </div>

            <div className="input-container">
              <input id="Lossandgrief" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Lossandgrief" ststyle={{ textAlign: "center" }}>
                  Loss & grief
                </label>
              </div>
            </div>

            <div className="input-container">
              <input id="Loneliness" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Loneliness" ststyle={{ textAlign: "center" }}>
                  Loneliness
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lastOne">
        <Link className="atag" to="/text">
          Get Your Mood
        </Link>
        {/* <button type="submit" onClick={(e) => handleMoodTopic(e)}>
          Are you ready
        </button> */}
        <div>
          <button type="submit" onClick={handleBothClicks}>
            Are you ready
          </button>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h1"
                style={{
                  color: "#946ef5",
                  fontSize: "2.2rem",
                  fontWeight: "900",
                }}
              >
                Disclaimer
              </Typography>
              <Typography
                style={{ color: "#636363" }}
                id="keep-mounted-modal-description"
                sx={{ mt: 2 }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione enim fuga tempore earum harum vel numquam delectus vitae
                voluptate dignissimos!
                <br />
                <div className="checkbox-wrapper-12">
                  <div className="cbx">
                    <input
                      id="cbx-12"
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="cbx-12"></label>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                      <path d="M2 8.36364L6.23077 12L13 2"></path>
                    </svg>
                  </div>
                  {/* <!-- Gooey--> */}
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <filter id="goo-12">
                        <fegaussianblur
                          in="SourceGraphic"
                          stdDeviation="4"
                          result="blur"
                        ></fegaussianblur>
                        <fecolormatrix
                          in="blur"
                          mode="matrix"
                          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                          result="goo-12"
                        ></fecolormatrix>
                        <feblend in="SourceGraphic" in2="goo-12"></feblend>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <br />
                <button
                  type="submit"
                  disabled={!isChecked}
                  onClick={(e) => handleMoodTopic(e)}
                >
                  Lets chat
                </button>
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Choice;
