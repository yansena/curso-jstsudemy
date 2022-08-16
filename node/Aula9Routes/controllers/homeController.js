exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Insira seu Nome: <input type="text"  name="nome">
    <button>Enviar</button>
  `)
}

exports.formReturn = (req, res) => {
  console.log(req.body);
  res.send(` O que foi enviado: ${req.body.nome}`);
}