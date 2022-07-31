var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

app.get('/', function(req, res) {
    res.send('Olá Mundo!');
  });

/* 
Ligando o servidor
*/
const porta = 3000
try {
    app.listen(porta, function() {
        console.log(`Node Js::: Servidor conectado::: http://localhost:${porta}`);
      });
} catch (error) {
    console.log(error.message)
}