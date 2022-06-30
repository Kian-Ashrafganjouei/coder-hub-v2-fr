import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroOther(props) {
  return (
    <div className='hero-container'>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
}

export default HeroOther;
