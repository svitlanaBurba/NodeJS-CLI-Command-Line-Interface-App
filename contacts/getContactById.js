const listContacts = require('./listContacts');

const getContactById = async id => {
  try {
    const contacts = await listContacts();
    const contact = contacts.find(contact => contact.id === id);
    if (!contact) {
      throw new Error(`Contact with id=${id} is not found`);
    }
    return contact;
  } catch (error) {
    throw error;
  }
};
module.exports = getContactById;
