const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Insira seu Nome: <input type="text"  name="nome">
  <button>Enviar</button>
  `)
})

app.post('/', (req, res) => {
  res.send('Recebi o formulario')
})


app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato')
})

app.listen(3333);