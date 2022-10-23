import React from "react"
import './capa.scss'
import Photo__Jose from './../../assets/me-about.jpg'

const Capa = () => {

  return (
    <section className='capa' id="home">
      <div className="container">
       
        <div className="apresentacao">
            <img className="img__jm" src={Photo__Jose} alt="Foto de Perfil - Github" />
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