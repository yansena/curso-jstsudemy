const Contact = require('../models/ContactModel');

exports.index = async (req, res) => {
  const contacts = await Contact.findContacts();
  console.log(contacts)
  return res.render('index');
}
