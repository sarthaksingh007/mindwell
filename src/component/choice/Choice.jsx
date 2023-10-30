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
import "../../style/radio.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const Choice = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

        <div class="container1">
          <div class="radio-tile-group">
            <div class="input-container">
              <input id="Delighted" type="radio" name="radio" />
              <div class="radio-tile">
                <img
                  style={{ width: "50px", padding: "12px" }}
                  src={Delighted}
                  alt=""
                />
                <label for="Delighted" style={{ padding: "0 5px 0 5px" }}>
                  Delighted
                </label>
              </div>
            </div>

            <div class="input-container">
              <input id="Good" type="radio" name="radio" />
              <div class="radio-tile">
                <img
                  style={{ width: "50px", padding: "12px" }}
                  src={Good}
                  alt=""
                />
                <label for="Good" style={{ padding: "0 5px 0 5px" }}>
                  Good
                </label>
              </div>
            </div>

            <div class="input-container">
              <input id="Okay" type="radio" name="radio" />
              <div class="radio-tile">
                <img
                  style={{ width: "50px", padding: "12px" }}
                  src={Okay}
                  alt=""
                />
                <label for="Okay" style={{ padding: "0 5px 0 5px" }}>
                  Okay
                </label>
              </div>
            </div>

            <div class="input-container">
              <input id="Notgreat" type="radio" name="radio" />
              <div class="radio-tile">
                <img
                  style={{ width: "50px", padding: "12px" }}
                  src={NotGreat}
                  alt=""
                />
                <label
                  for="Notgreat"
                  style={{ padding: "0 5px 0 5px", textAlign: "center" }}
                >
                  Not great
                </label>
              </div>
            </div>

            <div class="input-container">
              <input id="Overwhelmed" type="radio" name="radio" />
              <div class="radio-tile">
                <img
                  style={{ width: "50px", padding: "12px" }}
                  src={Overwhelmed}
                  alt=""
                />
                <label
                  for="Overwhelmed"
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

        <div class="container1">
          <div class="radio-tile-group">
            <div class="input-container">
              <input id="family-friend" type="radio" name="radio" />
              <div class="radio-tile">
                <label for="family-friend" style={{ textAlign: "center" }}>
                  Family & Friends
                </label>
              </div>
            </div>

            <div class="input-container">
              <input id="Relationship" type="radio" name="radio" />
              <div class="radio-tile">
                <label for="Relationship" style={{ textAlign: "center" }}>
                  Relationship
                </label>
              </div>
            </div>

            <div class="input-container">
              <input id="Academics" type="radio" name="radio" />
              <div class="radio-tile">
                <label for="Academics" style={{ textAlign: "center" }}>
                  Academics
                </label>
              </div>
            </div>

            <div class="input-container">
              <input id="ProfessionalLife" type="radio" name="radio" />
              <div class="radio-tile">
                <label
                  for="ProfessionalLife"
                  style={{ textAlign: "center", padding: "0 5px 0 5px" }}
                >
                  Professional Life
                </label>
              </div>
            </div>

            <div class="input-container">
              <input id="Covid-19" type="radio" name="radio" />
              <div class="radio-tile">
                <label for="Covid-19" ststyle={{ textAlign: "center" }}>
                  Covid-19
                </label>
              </div>
            </div>

            <div class="input-container">
              <input id="Self" type="radio" name="radio" />
              <div class="radio-tile">
                <label for="Self" ststyle={{ textAlign: "center" }}>
                  Self
                </label>
              </div>
            </div>

            <div class="input-container">
              <input id="Justtalk" type="radio" name="radio" />
              <div class="radio-tile">
                <label for="Justtalk" ststyle={{ textAlign: "center" }}>
                  Just talk
                </label>
              </div>
            </div>

            <div class="input-container">
              <input id="Lossandgrief" type="radio" name="radio" />
              <div class="radio-tile">
                <label for="Lossandgrief" ststyle={{ textAlign: "center" }}>
                  Loss & grief
                </label>
              </div>
            </div>

            <div class="input-container">
              <input id="Loneliness" type="radio" name="radio" />
              <div class="radio-tile">
                <label for="Loneliness" ststyle={{ textAlign: "center" }}>
                  Loneliness
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lastOne">
        <Link className="atag" to="/text">Get Your Mood</Link>
        {/* <button type="submit" onClick={(e) => handleMoodTopic(e)}>
          Are you ready
        </button> */}
        <div>
      <Button onClick={handleOpen}><button type="submit" onClick={(e) => handleMoodTopic(e)}>
          Are you ready
        </button></Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
      </div>
    </div>
  );
};

export default Choice;
