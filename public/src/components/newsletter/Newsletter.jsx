import React from 'react'
import './newsletter.scss'

const Newsletter = () => {
  return (
    <section className="newsletter">

      <h2>Newsletter</h2>
      <div className="container">
        <div className="left">
          <h2>Inscreva-se em nossa Newsletter</h2>
          <p>Novidades todas a semana</p>
          <p>Todos os dados informados não será compartilhado com terceiros</p>
        </div>
        <div className="right">
          <form>
            <label>Seu nome:</label>
            <input type="text" className='nome_news' name="nome_news" id="nome_news" />
            <label>Seu melhor e-mail:</label>
            <input type="text" className='email_news' name="email_news" id="email_news" />
            <button type="submit" className='botao'>Cadastrar</button>
          </form>
        </div>
   
      </div>
    </section>
  )
}

export default Newsletter