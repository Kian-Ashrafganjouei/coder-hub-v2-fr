import React from 'react'
import Navbar from '../Navbar';

function Courses2() {
  return (

    <>

    <div className="personal-info-container">
    <label>Sélectionnez un cours</label>
    <select>
        <option value="mario"> C Cours</option>
        <option value="mario"> C++ Cours</option>
        <option value="mario"> Java Cours</option>
        <option value="mario"> JavaScript Cours</option>
        <option value="mario"> Python Cours</option>
    </select>
    <br />
    <label>Sélectionnez un semestre</label>
    <select>
        <option value="mario"> Semestre d'automne</option>
        <option value="mario"> Semestre d'hiver</option>
        <option value="mario"> Le semestre d'été</option>
    </select>
    </div>
    
    
    </>

  )
}

export default Courses2