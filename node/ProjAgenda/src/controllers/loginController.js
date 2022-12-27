const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  res.render('login');
}

exports.register = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.register();
    console.log(login.errors.length)
    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(() => {
        return res.redirect('/login/index');
      });
      return;
    }

    req.flash('success', 'Usuario criado com sucesso');
    req.session.save(() => {
      return res.redirect('/login/index');
    });
  } catch (e) {
    console.log(e)
    return res.render('404');
  }

}

exports.login = (req, res) => {
  res.render('login');
}
