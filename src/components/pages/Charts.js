import React from 'react';
import '../../App.css';
import HeroOther from '../HeroOther'
import Navbar from '../Navbar';

export default function Charts() {
  return (
    <>
    <HeroOther title={"Graphiques"} desc={"Regardez les données"}/>
    <h1>Pourcentage de programmeurs par rapport à la profession de programmeur</h1>
    <div id='outerplayer'>
      <div className='videoplayer'>
        <img src={require('../imges/occupation.jpg')}/>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


    <h1>Technologies/langages les plus utilisés</h1>
    <div id='outerplayer'>
      <div className='videoplayer'>
        <img src={require('../imges/lan-tech.jpg')}/>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


    <h1>Répartition par âge des programmeurs</h1>
    <div id='outerplayer'>
      <div className='videoplayer'>
        <img src={require('../imges/age.jpg')}/>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    </>
  );

}
