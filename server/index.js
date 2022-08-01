/* Importando bibliotecas e frameworks */
import express from 'express'
import cors from 'cors'

/* Instanciando e importando SQlite */
// import {openDb} from './configDB.js'
import { 
    criar_tabela, 
    inserir_contato, 
    mostrar_contatos 
  }
from './Controler/newsletter.js'


/* Instanciando Framework App */
const app = express()

/* Introduzindo cors e expressando o framework em json */
app.use(express.json())
app.use(cors())

/* Pagina Incial */
app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.get('/api/contato/newsletter', (req, res) => {
  try {
    mostrar_contatos(req, res)
  res.json()
  } catch (error) {
    console.log(error.message)
  }
})

/* Insere contato */
app.post('/api/contato/newsletter', (req, res) => {
  inserir_contato(req, res)
  return res.json({"statusCode": 200})
})

/* atualiza contato */
app.put('/api/contato/newsletter', (req, res) => {
  if(req.body && !req.body.id) {
    res.json({
      "statusCode": 400,
      "msg": "Voce precisa informar o id"
    })
  } else {
    atualizar_contato(req, res)
    res.json({"statusCode": 200})
  }
  
})

/* Ligando o servidor */
const porta = 3000
try {
  app.listen(porta, function() {
    console.log(`Node Js::: Servidor conectado::: http://localhost:${porta}`)
  });
} catch (error) {
  console.log(error.message)
}

