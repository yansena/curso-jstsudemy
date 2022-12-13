exports.MiddlewareGlobal = (req, res, next) => {
  res.locals.localVariable = 'Value of locale variable';
  next();
}

exports.checkCsrfError = (err, req, res, next) => {
  if(err && err.code === 'EBADCSRFTOKEN') {
    return res.send('Bad Csrf');
  }
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}

