const {Command} = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();
console.log(argv);

const contactsApp = require('./contacts');

const invokeAction = async ({action, id, name, email, phone}) => {
  try {
    switch (action) {
      case 'list':
        const contacts = await contactsApp.listContacts();
        console.table(contacts);
        break;

      case 'get':
        const contactById = await contactsApp.getContactById(Number(id));
        console.log(contactById);
        break;

      case 'add':
        const addContact = await contactsApp.addContact({name, email, phone});
        console.log(addContact);
        break;

      case 'remove':
        const removedContact = await contactsApp.removeContact(Number(id));
        // console.log(removedContact);
        break;

      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  } catch (error) {
    console.log(error);
  }
};

invokeAction(argv);

// const id = '31e511bf-a7f1-425d-ba2e-e61d1f40ccaf';
// const contacts = contactsApp.removeContact(id);
// contacts.then(data => console.log(data)).catch(error => console.log(error));
