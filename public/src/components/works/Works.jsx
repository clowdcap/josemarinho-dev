import React, { useEffect, useState } from "react" 
import './works.scss'
// import Foto from './../../assets/portfolio2.jpg'

const Works = () => {

  const [data, setData] = useState([]);
  const fetch_api = async () => {
    // fetch('https://api.github.com/users/clowdcap')
    // .then(async data => setData(await data.json()))
    // .catch((e)=>(console.log(e)))

    const response = await fetch('https://api.github.com/users/clowdcap/repos')
    const response_data = await response.json() 
    if (response_data) {
      console.log(response_data)
      setData(response_data)
    }
  }

  useEffect(() => {
    fetch_api()
  }, [])

  return (
    <section className="works" id="servicos">

      <div className="container">

        <h1>Portifólio</h1>
        
        <div className="menu__portifolio">
          <p>Selecione a Tecnologia</p>
          <div className="options">
            <input type="radio" name="HTML" id="HTML"/> HTML
            <input type="radio" name="Python" id="Python"/> Python
            <input type="radio" name="JavaScript" id="JavaScript"/> JavaScript
            <input type="radio" name="CSS" id="CSS"/> CSS
          </div>
        </div>

        <ul className="items">
    
          {data.map(item => {
            const itens = []
            if (item.language === "HTML") {
              return (
                <li className="item">
                    <h2>Projeto: <span>{item.name}</span></h2>
                    <h4>Tecnologia: <span>{item.language}</span></h4>
                    <h3>URL: <a href="{item.svn_url}">Github Respositório</a></h3>
                    <p>{item.description}</p>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </section>    
  )
}

export default Works

/*
<div className="left">
  <h2>Projeto: <span>Blog JM</span></h2>
  <h4>Tecnologias: Python</h4>
  <h4>Back End e Front End</h4>
  <img src={Foto} alt="Capa" />
  <p>Com intuito de desenvolver um sistema FullStack de um sistema de Blog, com sistema CRUD de armazenamento de dados com DB SQLite3</p>
  <p>Link: <a href="#">Repositório do Github</a></p>
</div>
<div className="center">
  <h2>Projeto: <span>WebSite Portifólio</span></h2>
  <h4>Tecnologias: React Js</h4>
  <h4>Front End</h4>
  <img src={Foto} alt="Capa" />
  <p>O portifólio que desenvolvi para divulgar meus projetos e minha capacidade em desenvolvimento web</p>
  <p>Link: <a href="#">Repositório do Github</a></p>
</div>
<div className="right">
  <h2>Projeto: <span>App-PyQt5</span></h2>
  <h4>Tecnologias: PyQt5</h4>
  <h4>Desevolvimento de App</h4>
  <img src={Foto} alt="Capa" />
  <p>Um sistema simples com layout feito pelo QtDesigner, com intuito de automatizar algumas funcionalidades e rotineiras de minhas funções na Prefeitura.</p>
  <p>Link: <a href="#">Repositório do Github</a></p>
</div>
*/