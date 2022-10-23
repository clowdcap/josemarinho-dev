import React from 'react'
import './contact.scss'

import Photo__Jose from './../../assets/me.png'

const Contact = () => {
  return (
    <section className="contato" id="contato">
      <div className="container">
        <h2>Entre em contato</h2>
        <div className="texto__contato">
          <h3>Lorem ipsum dolor sit.</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, ipsum.</p>
        </div>
        <div className="inputs__contato">

          <div className="left">
            <h3>Deixe um feedback, sugestão ou criticas</h3>
            <p>Seu comentário tem muita importancia para mim</p>
            <p>______________________________________________</p>
            <form>
              <label>Seu nome</label>
              <input className="input__contato__" type="text" name="" id="" />
              <label>Seu email</label>
              <input className="input__contato__" type="text" name="" id="" />
              <label>Seu telefone</label>
              <input className="input__contato__" type="text" name="" id="" />
              <label>Seu comentário</label>
              <textarea className="input__contato__text" ></textarea>
              <button type="submit" className='input__contato__btn'>Enviar</button>
            </form>
          </div>
       
          <div className="right">
            <img src={Photo__Jose} alt="Contato" />
          </div>
       
        </div>
      </div>
    </section>
  )
}

export default Contact