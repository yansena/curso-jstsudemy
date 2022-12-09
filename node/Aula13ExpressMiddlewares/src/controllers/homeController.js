exports.paginaInicial = (req, res) => {
  res.render('index')
}

exports.formReturn = (req, res) => {
  console.log(req.body);
  res.send(req.body);
}