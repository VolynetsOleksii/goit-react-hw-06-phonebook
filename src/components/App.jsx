import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './Form/Form';
import { ContactsList } from './Contacts/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contacts/contactsSlice';
import { setFilter } from 'redux/filter/filterSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  
  const handleSubmit = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    const checkUser = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    checkUser
      ? toast.warn(`${name} is already in the contacts`)
      : dispatch(addContact(newContact));
  };

  const handleChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <Filter handleChange={handleChange} filter={filter} />
      <ContactsList
        contacts={getFilteredContacts}
        onDeleteContact={handleDeleteContact}
      />
      <ToastContainer />
    </Container>
  );
};
