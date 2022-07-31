/* Importando bibliotecas e frameworks */
import express from 'express'
import cors from 'cors'

/* Instanciando e importando SQlite */
// import {openDb} from './configDB.js'
import { 
    criar_tabela, 
    atualizar_contato, 
    deletar_contato, 
    inserir_contato, 
    mostrar_contatos, 
    selecionar_contato }
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

app.get('/newsletter', (req, res) => {
  try {
    mostrar_contatos(req.body)
  res.json({'statusCode': 200})
  } catch (error) {
    console.log(error.message)
  }
})

/* Insere contato */
app.post('/newsletter', (req, res) => {
  inserir_contato(req.body)
  return res.json({"statusCode": 200})
})

/* atualiza contato */
app.put('/newsletter', (req, res) => {
  if(req.body && !req.body.id) {
    res.json({
      "statusCode": "400",
      "msg": "Voce precisa informar o id"
    })
  } else {
    atualizar_contato(req.body)
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
