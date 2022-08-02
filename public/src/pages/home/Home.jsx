import React from 'react'
import './home.css'

/* Componentes */
import Capa from './../../components/capa/Capa'
import Sobre from './../../components/sobre/Sobre'
// import Contato from './../../components/contato/Contato'
// import Newsletter from './../../components/newsletter/Newsletter'
// import Projetos from './../../components/projetos/Projetos'
// import Servicos from './../../components/servicos/Servicos'


const Home = () => {
  return (
    <>
        <Capa />
        <Sobre />
    </>
  )
}

export default Home