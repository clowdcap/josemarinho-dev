import React, { useState, useEffect } from 'react'

const Sobre = () => {

  const [count, setCount] = useState(1)



  return (
    <section className="sobre">
      <div className="container">
      <div>
        <p>Você clicou {count} vez</p>
        <button onClick={() => setCount(count + 1)}>
          Clique aqui
        </button>
      </div>
      </div>
    </section>
  )
}

export default Sobre