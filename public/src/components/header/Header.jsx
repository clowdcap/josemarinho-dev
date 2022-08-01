import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo"><h3><a href="#home">Jose.dev</a></h3></div>
        <div className="menu">

          <div className="desktop">
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#sobre">Serviços</a></li>
              <li><a href="#sobre">Skills</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="mobile">
            Icone
          </div>

          <div className="mobile">
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#sobre">Serviços</a></li>
              <li><a href="#sobre">Skills</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          
          
        </div>
      </div>
    </header>
  )
}

export default Header