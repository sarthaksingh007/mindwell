import React from 'react';
import { Link } from 'react-router-dom/dist';
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
const FindExperts = () => {

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
  
  return (
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
  );
};

export default FindExperts;

