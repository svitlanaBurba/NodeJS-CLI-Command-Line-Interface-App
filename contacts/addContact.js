const fs = require('fs').promises;
const findMaxId = require('./findMaxId');

const listContacts = require('./listContacts');
const contactsPath = require('./contactsPath');

const addContact = async data => {
  const newContact = {...data, id: (await findMaxId()) + 1};

  try {
    const contacts = await listContacts();
    const newContacts = JSON.stringify([...contacts, newContact]);
    await fs.writeFile(contactsPath, newContacts);
    return newContacts;
  } catch (error) {
    throw error;
  }
};

module.exports = addContact;
