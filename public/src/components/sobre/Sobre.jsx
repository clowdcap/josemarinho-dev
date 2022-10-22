import React from 'react'
import './sobre.scss'
import Me from './../../assets/me.png'

const Sobre = () => {

  return (
    <section className="sobre" id='sobre'>
      <div className="container">
        <div className="left">
          <h2>Sobre mim</h2>
          <h3>Minha tragetória</h3>
          <p>Meu primeiro contato com a tecnologia foi durante o inicio da pandemia em 2020, quando comecei a ter que ver outras alternativas profissionais, onde acabei me apaixonando e com grande interesse em focar na área.</p>
            <br />
          <h3>Minha Carreira</h3>
          <p>Sou formado em Arquitetura e Urbanismo na UniCuritiba, Ex-Militar do Exército Brasileiro e atualmente trabalho na Prefeitura Municipal de Campo Magro, na Secretaria de Urbanismo.</p>
            <br />
          <h3>Tecnologias</h3>
          <p>Front End: <span>React Js | Scss</span></p>
          <p>Back End: <span>Node Js | Python</span></p>
          <p>Banco de Dados: <span>SQlite3 | MongoDB</span></p>
        </div>
        <div className="right">
          <img src={Me} alt="Me" />
        </div>
      </div>
    </section>
  )
}

export default Sobre