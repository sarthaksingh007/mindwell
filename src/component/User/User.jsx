import React ,{useEffect}from "react";
// import { FiSearch } from "react-icons/fi";
// import {BsThreeDotsVertical} from "react-icons/bs"
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../../App.css'
import Anxioty from '../../asset/Anxiety.svg'
import Depression from '../../asset/depression.jpg'
import OverThink from '../../asset/overthinking.jpg'
import Wellness from '../../asset/wellness.jpg'
import Lonely from '../../asset/lonily.jpg'
import Relation from '../../asset/realationship.jpg'
import Health from '../../asset/health.jpg'
import Carrer from  '../../asset/carrer.jpg'
import Sleep from '../../asset/sleep.jpg'
import Sex from '../../asset/sex.jpg'
import Productivity from '../../asset/lossofpro.jpg'
import Stress from '../../asset/stress.jpg'
import Grief from '../../asset/grief.jpg'
import Women from '../../asset/womenHealth.jpg'
const User = () => {

  const navigate=useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('user'))
      navigate("/login");
  }, [navigate]);

  const squareBoxesData = [
    {
      id: 1,
      name: 'Anxiety',
      imgSrc: Anxioty,
    },
    {
      id: 2,
      name: 'Depression',
      imgSrc: Depression,
    },
    {
      id: 3,
      name: 'Overthinking',
      imgSrc: OverThink,
    },
    {
      id: 4,
      name: 'Emotional Wellness',
      imgSrc: Wellness,
    },
    {
      id: 5,
      name: 'Loneliness',
      imgSrc: Lonely,
    },
    {
      id: 6,
      name: 'Relationships',
      imgSrc: Relation,
     
    },
    {
      id: 7,
      name: 'Health',
      imgSrc: Health,
    },

    {
      id: 8,
      name: 'Career Couselling',
      imgSrc: Carrer,
    },
    {
      id: 9,
      name: 'Sleep',
      imgSrc: Sleep,
    },
    {
      id: 10,
    
      name: 'Sexual Wellness',
      imgSrc: Sex,
    },
    {
      id: 11,
      name: 'Loss of productivity',
      imgSrc: Productivity,
    },
    {
      id: 12,
      name: 'Stress',
      imgSrc: Stress,
    },
    {
      id: 13,
      name: 'Grief',
      imgSrc: Grief,
    },
    {
      id: 14,
      name: 'Women Health',
      imgSrc: Women,
    },
  ];

  const handlechange=()=>{
    navigate('/choice')
  }
  return (
    <section className="user">
      <div className="history">
      <div>
      <h2 className='h2offind'>What do you want to <span style={{color:"#9370DB"}}>talk about?</span></h2>
      <div className='upperexpert'>
        {squareBoxesData.map((box) => (
          <Link className='expertLink' to='/Experts' key={box.id}>
            <div className='findexpertDiv'>
              <img className='findImage' src={box.imgSrc} alt="" />
              <p className='expertP'>{box.name}</p>
            </div>
          
          </Link>
        ))}
      </div>
    </div>
        {/* <div class="wrapper">
          <div class="icon">
            <FiSearch />
          </div>
          <input class="input" placeholder="Search"></input>
        </div>
        <ul>
          <li>
            <div className="data">
              <div>
                <h3>sarthak</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  velit.
                </p>
              </div>
              <BsThreeDotsVertical/>
            </div>
          </li>
          <li>
            <div className="data">
              <div>
                <h3>sarthak</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  velit.
                </p>
              </div>
              <BsThreeDotsVertical/>
            </div>
          </li>
          <li>
            <div className="data">
              <div>
                <h3>sarthak</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  velit.
                </p>
              </div>
              <BsThreeDotsVertical/>
            </div>
          </li>
          <li>
            <div className="data">
              <div>
                <h3>sarthak</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  velit.
                </p>
              </div>
              <BsThreeDotsVertical/>
            </div>
          </li>
          <li>
            <div className="data">
              <div>
                <h3>sarthak</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  velit.
                </p>
              </div>
              <BsThreeDotsVertical/>
            </div>
          </li>
        </ul> */}
      </div>
      <div className="userchat">
        <h1>Oops! You are disconnected.</h1>
        <button className="" onClick={handlechange}>Lets Chat</button>
      </div>
    </section>
  );
};

export default User;
