const Contact = require('../models/ContactsModel')
const Login = require('../models/LoginModel')

exports.index = async (req, res) => {
  const contacts = await Contact.prototype.findContacts();
  return res.render('index', { contacts });
}
