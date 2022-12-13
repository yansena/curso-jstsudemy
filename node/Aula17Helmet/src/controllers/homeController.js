exports.paginaInicial = (req, res) => {
  res.render('index', {
    title: 'This is title',
    numbers: [0,1,2,3,4,5,6]
  });
  return;
}

exports.formReturn = (req, res) => {
  res.send(req.body);
}