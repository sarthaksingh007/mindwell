import React from "react";
import { motion } from "framer-motion";
import logo1 from "../../asset/headersvg.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Header = () => {
  const navigate=useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleClick = async () => {
    const id = await JSON.parse(localStorage.getItem('user'))._id;
    const data = await axios.get(`http://localhost:5000/logOut/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };

  return (
    <nav>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.5,
        }}
      >
        <img src={logo1} alt="logo" />
      </motion.div>
      <div className="navvy" style={{ marginBottom: "25px" }}>
        <Link to="">Home</Link>
        <Link to="">About Us</Link>
        <Link to="">FAQ</Link>
        <Link className="vl"></Link>
        {user ? 
        (
          <button onClick={handleClick}>Logout</button>
        ) 
        : 
        (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
