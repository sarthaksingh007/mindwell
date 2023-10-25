import React from "react";
import { motion } from "framer-motion";
import {RiMentalHealthLine} from "react-icons/ri"
import {TbFriends} from "react-icons/tb"
import {MdOutlineSecurity} from "react-icons/md"
import {MdOutlineEventAvailable} from "react-icons/md"
const Services = () => {
  return (
    <section className="services">
      <article>
        <h2>Your <span>Comfort</span> is our Goal</h2>
      </article>
      <main>
        <motion.div
          className="contain"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 , ease: "easeOut"}}
        >
          <MdOutlineSecurity/>
          <br />
          <h3>Secure & private</h3>
        </motion.div>
        <motion.div
          className="contain"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 , ease: "easeOut"}}
        >
          <TbFriends />
          <br />
          <h3 style={{position:"relative",right:"-10px"}}>Talk Friendly</h3>
        </motion.div>
       
        <motion.div
          className="contain"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 , ease: "easeOut"}}
        >
          <MdOutlineEventAvailable/>
          <br />
          <h3 style={{position:"relative",right:"-10px"}}>Available 24/7</h3>
        </motion.div>
       
        <motion.div
          className="contain"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, ease: "easeOut" }}
        >
          <RiMentalHealthLine />
          <h3>Mental health</h3>
        </motion.div>
      </main>
    </section>
  );
};

export default Services;
