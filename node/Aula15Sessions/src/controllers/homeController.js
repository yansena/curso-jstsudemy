exports.paginaInicial = (req, res) => {
  res.render('index')
}

exports.formReturn = (req, res) => {
  res.send(req.body);
}