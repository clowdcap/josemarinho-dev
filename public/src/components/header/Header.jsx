import React from 'react'
import './header.css'
import { Link, Outlet} from 'react-router-dom'

import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo"><h3><a href="#home">Jose.dev</a></h3></div>
        <div className="menu">

          <div className="desktop">
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#sobre">Serviços</a></li>
              <li><a href="#sobre">Skills</a></li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </div>

          <div className="mobile__btn">
            <i><FaBars /></i>
          </div>

          <div className="mobile__menu">
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#sobre">Serviços</a></li>
              <li><a href="#sobre">Skills</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          
          <Outlet />
        </div>
      </div>
    </header>
  )
}

export default Header