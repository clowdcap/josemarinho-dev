import React from 'react'
import './projetos.scss'

const Projetos = () => {
  return (
    <section className="projetos" id='servicos'>
      <div className="container">
        <h1 >Meus Serviços</h1>
        <h3 >Todas as possiveis aplicações</h3>

        <div className="itens">
          <div className="box">
            <h2>Desenvolvimento Web</h2>
            
            <ul>
              <li>Sites</li>
              <li>Landing Page</li>
              <li>Blog</li>
              <li>Rede Social</li>
              <li>Manutenção</li>
              <li>Dashboards</li>
              <li>Sistema Completo</li>
            </ul>
          </div>

          <div className="box">
            <h2>Arquiteto</h2>
            <ul>
              <li>Projeto Residencial</li>
              <li>Projeto Comercial</li>
              <li>Renderizações Fotorealistas</li>
              <li>Maquetes Eletrôrnicas - Estática e Interativa</li>
              <li>Sustentabilidade</li>
              <li>Consultoria</li>
            </ul>
          </div>
          
          <div className="box">
            <h2>Urbanista</h2>
            <ul>
              <li>Loteamento</li>
              <li>Planejamento Urbano</li>
              <li>Sistema BIM</li>
              <li>Habitação de Interesse Social</li>
              <li>Licitações</li>
              <li>Consultoria</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projetos