import React from 'react'
import './index.css'
import logo from '../../images/headerLogo.png'
const Header = () => {
  return (
    <header className="header">
       
        <img src={logo} alt="" />
        <h2>MyContacts</h2>

    </header>
  )
}

export default Header