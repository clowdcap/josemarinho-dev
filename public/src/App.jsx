import React from 'react'
import './App.css'

// Rotas
// import { BrowserRouter } from 'react-router-dom'

// Componentes Fixos
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// Pages
import Home from './pages/home/Home'
// import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <>
        <Header />

        <Home />
        
        <Footer />
    </>
  )
}

export default App