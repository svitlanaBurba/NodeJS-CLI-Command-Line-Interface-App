const fs = require('fs').promises;
const contactsPath = require('./contactsPath');
const listContacts = require('./listContacts');

const removeContact = async id => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === id);

    if (index === -1) {
      throw new Error(`Contact with id=${id} is not found`);
    }

    const newContacts = contacts.filter(contact => contact.id !== id);

    const contactsToString = JSON.stringify(newContacts);
    await fs.writeFile(contactsPath, contactsToString);

    return contacts[index];
  } catch (error) {
    throw error;
  }
};
module.exports = removeContact;
