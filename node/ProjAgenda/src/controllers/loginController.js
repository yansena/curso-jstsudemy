const Login = require('../models/LoginModel');
const {re} = require("@babel/core/lib/vendor/import-meta-resolve");

exports.index = (req, res) => {
  console.log(req.session.user);
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

exports.login = async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.login();

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(() => {
        return res.redirect('/login/index');
      });
      return;
    }

    req.flash('success', 'User logged.');
    req.session.user = login.user;
    req.session.save(() => {
      return res.redirect('/');
    });
  } catch (e) {
    console.log(e)
    return res.render('404');
  }
}

exports.logout = (req, res) => {
  console.log('DESLOGOU')
  req.session.destroy();
  res.redirect('/login/index');
}
