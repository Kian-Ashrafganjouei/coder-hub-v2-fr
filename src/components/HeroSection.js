import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Frencgstyle.css'
function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Conçu pour les codeurs</h1>
      <p>Commencez votre parcours de programmation ici</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          action='pages/Courses.js'
        >
          PRENDRE UN COURS

        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          action='pages/Ide.js'
        >
          CODE<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
