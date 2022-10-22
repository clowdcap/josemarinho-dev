import React from 'react'
import './App.scss'

// Rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componentes Fixos
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// Pages
import Home from './pages/home/Home'
import Contato from './pages/contact/Contact'
//import Contact from './pages/contact/Contact'

const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App