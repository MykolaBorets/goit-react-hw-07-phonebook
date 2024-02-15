import css from './ContactList.module.css';

const ContactList = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name, number }) => (
    <li key={id} className={css.contacts}>
      {name}: {number}{' '}
      <button type="button" className={css.btn} onClick={() => deleteContact(id)} >Delete</button>
    </li>
  ));
  return (
    <>
      <ul className={css.list}>{elements}</ul>
    </>
  );
};

export default ContactList;
