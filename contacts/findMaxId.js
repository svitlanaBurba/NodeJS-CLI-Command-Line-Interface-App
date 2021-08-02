const listContacts = require('./listContacts');

const findMaxId = async () => {
  try {
    const contacts = await listContacts();
    const arrayId = contacts.map(contact => contact.id);
    const maxId = Math.max(...arrayId);
    return maxId;
  } catch (error) {
    throw error;
  }
};

module.exports = findMaxId;
