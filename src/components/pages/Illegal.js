import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import '../Button2.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function Ide() {
  return (
    <div>
        <h1>Page introuvable, s'il vous plaît <Link to={`pages/Home.js`}>
        Retour à l'accueil.</Link></h1>

    </div>

  );
}

export default Ide;
