import React from 'react'
import CVT from './CVT'
import ME from '../../Assets/me.png'
import HeaderSocials from './HeaderSocials'
import './Header.css'


function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Namaste,I'm</h5>
        <h1>Yash Mishra</h1>
        <h5 className="text-light">Software Consultant</h5>
        <CVT /> 
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="" />
      </div>
      </div>
    </header>
  )
}

export default Header