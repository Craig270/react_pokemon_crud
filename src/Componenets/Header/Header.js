import React from 'react'
import './Header.scss';
import logo from '../../images/Pokemon-Logo.png';
import pokemonBall from '../../images/pokeball.png';


const Header = () => {
  return (
    <div className='mainContainer'>
      <div>
      <img src={logo} className="pokemonLogo" alt="logo" />
      </div>
      <div>
      <img src={pokemonBall} className="pokeball" alt="logo" />

      </div>

    </div>
  )
}

export default Header