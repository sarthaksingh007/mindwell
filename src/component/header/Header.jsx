import React from "react";
import { motion } from "framer-motion";
import {FaUserCircle} from "react-icons/fa"
import logo1 from "../../asset/headersvg.svg"
import { Link } from "react-router-dom";
const Header = () => {
  const auth=localStorage.getItem('user');
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
      <div className="navvy" style={{marginBottom: "25px"}}>
        <Link to="">Home</Link>
        <Link to="">About Us</Link>
        <Link to="">FAQ</Link>
        <Link className="vl"></Link>
        {
          auth?
          <Link to="/login">Login</Link>
          :
          <Link to="/login"><FaUserCircle/></Link>
        }
        
      </div>
    </nav>
  );
};

export default Header;
