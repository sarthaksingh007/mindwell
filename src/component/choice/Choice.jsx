import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Choice = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    if (auth == null) {
      navigate("/");
    }
  }, []);

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
        <label htmlFor="cars">Mood:</label>

        <select
          onChange={handleChange}
          value={formData.mood}
          name="mood"
          id="mood"
        >
          <option value="0">Select Mood</option>
          <option value="good">good</option>
          <option value="bad">bad</option>
          <option value="happy">happy</option>
          <option value="sadness">sadness</option>
        </select>
      </div>
      <div className="2">
        <label htmlFor="cars">Topic:</label>

        <select
          onChange={handleChange}
          value={formData.topic}
          name="topic"
          id="topic"
        >
          <option value="0">Select Topic</option>
          <option value="relationship">relationship</option>
          <option value="self">self</option>
          <option value="covid">covid</option>
          <option value="academics">academics</option>
        </select>
      </div>

      <Link to="/getMood">Get Your Mood</Link>
      <button type="submit" onClick={(e) => handleMoodTopic(e)}>
        Are you ready
      </button>
    </div>
  );
};

export default Choice;
