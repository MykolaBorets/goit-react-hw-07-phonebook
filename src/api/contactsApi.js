import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65cbe125efec34d9ed8837b9.mockapi.io/api',
});

export const requestAllContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const requestAddContact = async body => {
  const { data } = await contactsInstance.post('/contacts', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await contactsInstance.delete(`/contacts/${id}`);
  return data;
};