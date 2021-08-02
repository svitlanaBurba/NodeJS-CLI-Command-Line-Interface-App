const fs = require('fs').promises;
const contactsPath = require('./contactsPath');
const listContacts = require('./listContacts');

const updateContact = async (id, newProps) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === id);

    if (index === -1) {
      throw new Error(`Contact with id=${id} is not found`);
    }
    contacts[index] = {...contacts[index], ...newProps};

    const newContacts = JSON.stringify(contacts);
    await fs.writeFile(contactsPath, newContacts);
    return contacts[index];
  } catch (error) {
    throw error;
  }
};
module.exports = updateContact;
