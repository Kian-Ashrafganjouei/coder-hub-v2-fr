import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import '../App.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Les langages de programmation les plus populaires!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='java-image'
              text='Java est un langage de programmation de haut niveau, basé sur des classes et orienté objet'
              label='Java'
            />
            <CardItem
              src='python-image'
              text='Python est un langage de programmation de haut niveau, interprété et à usage général'
              label='Python'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='c-image'
              text='C est un langage procédural impératif utilisé dans les systèmes d exploitation, les pilotes de périphériques et les piles de protocoles'
              label='C'
            />
            <CardItem
              src='javas-image'
              text='JavaScript est un langage de programmation qui est lune des technologies de base du World Wide Web'
              label='JavaScript'
            />
            <CardItem
              src='cpp-image'
              text='C++ est un langage de programmation à usage général qui est une extension de C'
              label='C++'
            />
          </ul>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>

      <h1> Exemple de code Python</h1>
      <div id='outerplayer'>
        <div className='videoplayer'>
        <img src={require('./imges/python-sample.jpg')}/>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1> Exemple de code C</h1>
      <div id='outerplayer'>
        <div className='videoplayer'>
        <img src={require('./imges/c-sample.jpg')}/>
        </div>
      </div>

    </div>
  );
}

export default Cards;
