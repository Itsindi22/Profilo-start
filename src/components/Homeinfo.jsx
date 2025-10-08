import React from 'react'
import { Link } from 'react-router-dom';

import {arrow} from '../assets/icons'

const InfoBox =({text,link,btnText}) => (
    <div className="info-box">
       <p className= "font-medium sm:text xl text-center"> {text} </p>
        <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src ={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)
const renderContact = {
    1: (
    <h1 className='sm:text-xl sm:leading-snug text-center 
    neo-brutalism-blue py-4 px-8 text-white mx-5'> 
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Inderpreet</span>
         👋
        <br />
        A  Frontend Developer from Indiana 
      </h1>
),
     2: (
        <InfoBox 
        text=" Gained Valuable experience worked  with multiple companies" 
        link="/About"
        btnText=" Learn more"
        />
    ),
     3: (
        <InfoBox 
        text=" Led multiple projects to success over the years. Curious 
        about the impact?" 
        link="/projects"
        btnText=" Vist my Profilo"
        />
    ),
     4: (
          <InfoBox 
        text=" Need a project done or looking fr a dev? I'm just a few keystrokes away" 
        link = "/contact"
        btnText=" Let's talk"
        />
    ),
}
const HomeInfo = ({currentStage}) => {
    return  renderContact[currentStage] || null;
}



export default HomeInfo