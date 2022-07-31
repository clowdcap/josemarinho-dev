/* Importando bibliotecas e frameworks */
var express = require('express')
var cors = require('cors')

/* Instanciando Framework App */
var app = express()

/* Introduzidno cors e expressando o framework em json */
app.use(cors())
app.use(express.json())

/* Instanciando Nomes */
const nomesTestes = ['Pessoa 1', 'Pessoa 2', 'Pessoa 3']

/* Pagina Incial */
app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

/* Listar nome pelo ID do array nomesTestes */
app.get('/nomes/:index', (req, res) => {
  const { index } = req.params
  return res.json(nomesTestes[index])
})

/* Listando todos os nomes */
app.get('/nomes', (req, res) => {
  return res.json(nomesTestes)
})

/* Criando um novo nome */
app.post('/nomes', (req, res) => {
  const {nome} = req.body
  nomesTestes.push(nome)
  return res.json(nomesTestes)
})

/* Atualizado nomes */
app.put('/nomes/:index', (req, res) => {
  const {index} = req.params
  const {nome} = req.body
  nomesTestes[index] = nome
  return res.json(nomesTestes)
})

/* Deletar nome */
app.delete('/nomes/:index', (req, res) => {
  const {index} = req.params
  nomesTestes.splice(index, 1)
  return res.json({ message: 'O nome foi deletado' })
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
