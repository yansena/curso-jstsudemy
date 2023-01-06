const Contact = require('../models/ContactsModel');

exports.index = (req, res) => {
  res.render('contact', {
    contact: {}
  });
}

exports.editIndex = async (req, res) => {
  if(!req.params.id) {
    return res.render('404')
  }

  const contact = await Contact.prototype.findUserById(req.params.id);

  if(!contact){
    return res.render('404')
  }

  res.render('contact', {
    contact: contact
  });
}

exports.register = async (req, res) => {
  try {
  const contact = new Contact(req.body);
  await contact();

  if(contact.errors.length > 0){
    req.flash('errors', contact.errors);
    req.session.save(() => res.redirect('/contact/index'));
    return
  }

  req.flash('success', 'Contato registrado com sucesso');
  req.session.save(() => res.redirect(`/contact/index/${contact.contact._id}`));
  } catch (e) {
    console.log(e)
  }
}

exports.edit = async (req, res) => {
  try {
    if(!req.params.id) {
      return res.render('404')
    }
    const contact = new Contact(req.body)
    await contact.edit(req.params.id);

    if(contact.errors.length > 0){
      req.flash('errors', contact.errors);
      req.session.save(() => res.redirect('/contact/index'));
      return
    }

    req.flash('success', 'Contato editado com sucesso');
    req.session.save(() => res.redirect(`/contact/index/${contact.contact._id}`));
  } catch (e) {
    console.log(e)
    res.render('404')
  }

}
