import React from 'react'
import './home.css'

/* Componentes */
import Capa from './../../components/capa/Capa'
import Contato from './../../components/contato/Contato'
// import Sobre from './../../components/sobre/Sobre'
// import Newsletter from './../../components/newsletter/Newsletter'
// import Projetos from './../../components/projetos/Projetos'
// import Servicos from './../../components/servicos/Servicos'


const Home = () => {
  return (
    <>
        <Capa />
        <Contato />
    </>
  )
}

export default Home