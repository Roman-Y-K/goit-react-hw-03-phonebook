import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => {
        return (
          <li className={styles.item} key={contact.id}>
            <span>{contact.name}:</span>
            <span> {contact.number}</span>
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                onDelete(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};
