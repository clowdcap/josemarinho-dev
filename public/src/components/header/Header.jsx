import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo"><h3>Logo</h3></div>
        <div className="menu">
          <div className="desktop">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>

          </div>
          
        </div>
      </div>
    </header>
  ) 
}

export default Header