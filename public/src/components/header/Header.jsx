import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo"><h3><Link to="/">Jose.dev</Link></h3></div>
        <div className="menu">

          <div className="desktop">
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#portifolio">Portifolio</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
      
        </div>
      </div>
    </header>
  )
}

export default Header