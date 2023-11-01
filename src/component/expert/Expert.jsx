import React from "react";
import img1 from "../../asset/1.jpg";
import img2 from "../../asset/2.jpg";
import img3 from "../../asset/3.jpg";
import img4 from "../../asset/4.jpg";
import img5 from "../../asset/5.jpg";
import img6 from "../../asset/6.jpg";
import img7 from "../../asset/7.jpg";
import img8 from "../../asset/8.jpg";
import img9 from "../../asset/9.jpg";
import img10 from "../../asset/10.jpg";
import { Link } from "react-router-dom";
import {FaUserGraduate} from "react-icons/fa6"
import {MdNotes} from "react-icons/md"
import {FaLanguage} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"

const Expert = () => {
  const popularExperts = [
    {
      id: 1,
      name: "Pankhuri Garg ",
      imgSrc: img1,
      description: "Counseling Psychologist",
      language: "English/Hindi",
      Experience: "3+ year of experience",
      category: "Grief/Loss, work life balance...",
      price:"₹900"
    },
    {
      id: 2,
      name: "Rishab Mishra",
      imgSrc: img2,
      description: "Counseling Psychologist",
      language: "English/Hindi",
      Experience: "5+ year of experience",
      category: "family problems, relationship...",
      price:"₹100"
    },
    {
      id: 3,
      name: "Minakshi Sharma",
      imgSrc: img3,
      description: "Counseling Psychologist",
      language: "English/Hindi",
      Experience: "2+ year of experience",
      category: "Grief/Loss, work life balance...",
      price:"₹1000"
    },
    {
      id: 4,
      name: "Palak Mehta",
      imgSrc: img4,
      description: "Organizational Psychologist",
      language: "English/Hindi",
      Experience: "10+ year of experience",
      category: "Sexual, Post trauma...",
      price:"₹800"
    },
    {
      id: 5,
      name: "Sharad Mehta",
      imgSrc: img5,
      description: "Counseling Psychologist",
      language: "English/Hindi",
      Experience: "6+ year of experience",
      category: "Grief/Loss, Women health...",
      price:"₹400"
    },
    {
      id: 6,
      name: "Abha Singh",
      imgSrc: img6,
      description: "Counseling Psychologist",
      language: "English/Hindi",
      Experience: "3+ year of experience",
      category: "Grief/Loss, productivity...",
      price:"₹100"
    },
    {
      id: 7,
      name: "Payal Sharma",
      imgSrc: img7,
      description: "clinical Psychologist",
      language: "English/Hindi",
      Experience: "3+ year of experience",
      category: "Grief/Loss, family problems...",
      price:"₹1900"
    },
    {
      id: 8,
      name: "Neha Sharma",
      imgSrc: img8,
      description: "Counseling Psychologist",
      language: "English/Hindi",
      Experience: "3+ year of experience",
      category: "trauma, work life balance...",
      price:"₹2000"
    },
    {
      id: 9,
      name: "Prakhar ",
      imgSrc: img9,
      description: "Organizational Psychologist",
      language: "English/Hindi",
      Experience: "3+ year of experience",
      category: "Grief/Loss,sexual wellness...",
      price:"₹900"
    },
    {
      id: 10,
      name: "Miss Kumari",
      imgSrc: img10,
      description: "Organizational Psychologist",
      language: "English/Hindi",
      Experience: "6+ year of experience",
      category: "Grief/Loss,work life balance...",
      price:"₹1900"
    },
  ];
  return (
    <>
      <h1 className="h1head">We have <span style={{color:"#9370DB"}}>Experts</span>  for your convenience</h1>
      <div className="expertUppr">
        {popularExperts.map((item) => (
          <div className="expertU">
            <div className="expertmain">
              <img className="imgimg" src={item.imgSrc} alt="" />
              <div className="expertcontent">
                <h2 className="expertheading">{item.name}</h2>
                <p className="expertpara"><FaUserGraduate/>&nbsp;{item.description}</p>
                <p className="expertpara"><MdNotes/>&nbsp;{item.Experience}</p>
                <p className="expertpara"><FaLanguage/>&nbsp;{item.language}</p>
                <p className="expertpara"><AiFillStar/>&nbsp;{item.category}</p>
                <p className="expertpara">Book in {item.price}<Link className="linking" to="/"> click here <AiOutlineArrowRight/></Link></p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Expert;
