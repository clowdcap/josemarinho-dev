import React from 'react'
import './home.scss'

/* Componentes */
import Capa from './../../components/capa/Capa'
import Sobre from './../../components/sobre/Sobre'
import Works from './../../components/works/Works'
import Newsletter from './../../components/newsletter/Newsletter'
import Projetos from './../../components/projetos/Projetos'
// import Servicos from './../../components/servicos/Servicos'


const Home = () => {
  return (
    <>
        <Capa />
        <Sobre />
        <Works />
        <Newsletter />  
        <Projetos />
    </>
  )
}

export default Home

/*
  
*/