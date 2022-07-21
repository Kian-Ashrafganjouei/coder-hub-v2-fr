import React from 'react';
import '../../App.css';
import HeroOther from '../HeroOther'
import Navbar from '../Navbar';

export default function Videos() {
  return(
    <>

    <HeroOther title={"Tutoriels vidéos"} desc={"Maîtrisez les langues à travers des vidéos"}/>
    <div id="outerplayer">
      <div className='videoplayer'> 
        <h1>C langauge tutorial</h1>
        <iframe width="1170" height="658" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="Tutoriel de programmation en C pour débutants" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='videoplayer'> 
        <h1>Java langauge tutorial</h1>
        <iframe width="1170" height="658" src="https://www.youtube.com/embed/grEKMHGYyns" title="Apprendre Java 8 - Tutoriel complet pour les débutants" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='videoplayer'> 
        <h1>Python langauge tutorial</h1>
        <iframe width="1170" height="658" src="https://www.youtube.com/embed/rfscVS0vtbw" title="Apprendre Python - Cours complet pour débutants [Tutoriel]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </div>
    </div>
    </>      

  );
}
