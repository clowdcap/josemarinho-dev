import React from "react"
import './capa.css'
import Photo__Jose from './../../assets/me-about.jpg'

const Capa = () => {

  return (
    <section className='capa'>
      <div className="container">
        <div className="foto__jm">
          
          <img src={Photo__Jose} alt="Foto de Perfil - Github" />
        
        </div>
        <div className="apresentacao">
          <h2>Olá, eu sou </h2>
          <h1>José Marinho</h1>
          <h3>Dev Front-End e Back-End</h3>
          <div className="btns__capa">
            <button>Linkdin</button>
            <button>Github</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Capa