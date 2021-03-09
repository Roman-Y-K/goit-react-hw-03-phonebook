import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactsList from './Components/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const verificationContact = contacts.find(contact => contact.name === name);

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (verificationContact) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const nolmalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nolmalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContact();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChange} />
        <ContactsList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
