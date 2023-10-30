import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo1 from "../../asset/headersvg.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [auth, setAuth] = useState(false);
  const navigate=useNavigate();
  
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  const onlogout = () => {
    localStorage.clear();
    setAuth(false);
    navigate('/')
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
        {auth ? 
        (
          <button onClick={onlogout}>Logout</button>
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
