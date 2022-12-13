exports.MiddlewareGlobal = (req, res, next) => {
  res.locals.localVariable = 'Value of locale variable';
  next();
}