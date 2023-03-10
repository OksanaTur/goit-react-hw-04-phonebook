import React, { Component } from 'react';

import { PhonebookFilter } from './PhonebookFilter/PhonebookFilter';
import { Container } from './App.styled';
import { PhonebookList } from './PhonebookList/PhonebookList';
import { nanoid } from 'nanoid';
import  PhonebookForm  from './PhonebookForm/PhonebookForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  };

  componentDidMount() {
     const savedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
     const currentContacts = this.state.contacts;

    if (currentContacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(currentContacts));
    }
  };

  addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    const normalizedName = name.toLowerCase();

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === normalizedName))
    {
      return alert(`${name} is already in contacts!`);
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {

    const filteredContacts = this.getFilteredContacts();
    const { addContact, filterContacts, deleteContact, state } = this;
    
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={addContact}/>
        <h2>Contacts</h2>
            <PhonebookFilter value={state.filter} onChange={filterContacts} />
            <PhonebookList
              contacts={filteredContacts}
              onDeleteButton={deleteContact}
            />
</Container>
    )
  }
}
  

