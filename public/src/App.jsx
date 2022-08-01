import React from 'react'
import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Home from './pages/home/Home'

// import { BrowserRouter } from 'react-router-dom'

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