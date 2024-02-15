import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { fetchContacts, addContact, deleteContact } from '../redux/Contacts/ContactsOperations';

import { setFilter } from '../redux/Filter/FilterSlice';
import { selectContacts, selectFilteredContacts, } from '../redux/Contacts/ContactsSelector';

const App = () => {
  const { isLoading, error } = useSelector(selectContacts);
  const items = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = data => {
    dispatch(addContact(data));
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} />
      {isLoading && <p>...Loading</p>}
      {error && <p>{error} </p>}
      {Boolean(items.length) && (
        <ContactList items={items} deleteContact={onDeleteContact} />
      )}
    </div>
  );
};

export default App;