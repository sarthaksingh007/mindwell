import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Delighted from "../../asset/delighted.png";
import Good from "../../asset/good.png";
import Okay from "../../asset/okay.png";
import NotGreat from "../../asset/notgreat.png";
import Overwhelmed from "../../asset/overwhelmed.png";
import { useNavigate } from "react-router-dom";
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
  const [open, setOpen] = useState(false);
  const [mood, setmood] = useState("");
  const [topic, settopic] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user'))
      navigate("/login");
  }, [navigate]);

  const handleSelectMood = (mood) => {
    setmood(mood);
  };

  const handleSelectTopic = (topic) => {
    settopic(topic);
    console.log("selected topic", topic);
  };
  const handleOpen = () => setOpen(true);
  


  const handleMoodTopic = async (e) => {
    e.preventDefault();
    if(mood==="" || topic===""){
      alert("Please Select the Mood and Topic");
      return false;
    }
    const userId = await JSON.parse(localStorage.getItem('user'))._id;
    try {
      let result = await fetch("http://localhost:5000/getmoodandtopic", {
        method: "post",
        body: JSON.stringify({ mood,topic,userId }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      result = await result.json();
      console.log(result);
      navigate("/setAvatar");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="1">
        <h2 className="headingchoice">
          Select your <span className="headingspan">mood</span>
        </h2>

        <div className="container1">
          <div className="radio-tile-group">
            <div
              className="input-container"
              onClick={() => handleSelectMood("Delighted")}
            >
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

            <div
              className="input-container"
              onClick={() => handleSelectMood("Good")}
            >
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

            <div
              className="input-container"
              onClick={() => handleSelectMood("Okay")}
            >
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

            <div
              className="input-container"
              onClick={() => handleSelectMood("Not great")}
            >
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

            <div
              className="input-container"
              onClick={() => handleSelectMood("overwhelm")}
            >
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
            <div
              className="input-container"
              onClick={() => handleSelectTopic("Family & Friends")}
            >
              <input id="family-friend" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="family-friend" style={{ textAlign: "center" }}>
                  Family & Friends
                </label>
              </div>
            </div>

            <div
              className="input-container"
              onClick={() => handleSelectTopic("Relationship")}
            >
              <input id="Relationship" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Relationship" style={{ textAlign: "center" }}>
                  Relationship
                </label>
              </div>
            </div>

            <div
              className="input-container"
              onClick={() => handleSelectTopic("Academics")}
            >
              <input id="Academics" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Academics" style={{ textAlign: "center" }}>
                  Academics
                </label>
              </div>
            </div>

            <div
              className="input-container"
              onClick={() => handleSelectTopic("Professional Life")}
            >
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

            <div
              className="input-container"
              onClick={() => handleSelectTopic("Covid-19")}
            >
              <input id="Covid-19" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Covid-19" ststyle={{ textAlign: "center" }}>
                  Covid-19
                </label>
              </div>
            </div>

            <div
              className="input-container"
              onClick={() => handleSelectTopic("Self")}
            >
              <input id="Self" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Self" ststyle={{ textAlign: "center" }}>
                  Self
                </label>
              </div>
            </div>

            <div
              className="input-container"
              onClick={() => handleSelectTopic("Just talk")}
            >
              <input id="Justtalk" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Justtalk" ststyle={{ textAlign: "center" }}>
                  Just talk
                </label>
              </div>
            </div>

            <div
              className="input-container"
              onClick={() => handleSelectTopic("Loss & grief")}
            >
              <input id="Lossandgrief" type="radio" name="radio" />
              <div className="radio-tile">
                <label htmlFor="Lossandgrief" ststyle={{ textAlign: "center" }}>
                  Loss & grief
                </label>
              </div>
            </div>

            <div
              className="input-container"
              onClick={() => handleSelectTopic("Loneliness")}
            >
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
        <button type="submit" onClick={handleOpen}>
          Are you ready
        </button>
        <div>
          <Modal
            keepMounted
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="disclaimer-title"
            aria-describedby="disclaimer-description"
          >
            <Box sx={style}>
              <Typography id="disclaimer-title" variant="h6" component="h2">
                Disclaimer: Terms and Conditions
              </Typography>
              <Typography id="disclaimer-description" style={{ marginTop: '10px', marginBottom: '10px' }}>
                By clicking 'Agree', you agree to abide by the terms
                and conditions set forth in our policies. This includes but is
                not limited to our privacy policy, cookie policy, and other
                usage terms. Please read and understand our terms before
                proceeding.
              </Typography>
              <button type="submit" style={{ marginRight: '10px'}} onClick={(e) => handleMoodTopic(e)}>
                Agree
              </button>
              <button onClick={() => setOpen(false)}>Close</button>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Choice;
