
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