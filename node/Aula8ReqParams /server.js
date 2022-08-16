const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Insira seu Nome: <input type="text"  name="nome">
  <button>Enviar</button>
  `)
})

app.get('/testes/:userId?/:parametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);

  res.send(req.params);
})

app.post('/', (req, res) => {
  console.log(req.body);

  res.send(` O que foi enviado: ${req.body.nome}`);
})


app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato');
})

app.listen(3333);