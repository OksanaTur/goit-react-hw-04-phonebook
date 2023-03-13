import React, { useEffect, useState, useRef } from 'react';
import { PhonebookFilter } from './PhonebookFilter/PhonebookFilter';
import { Container } from './App.styled';
import { PhonebookList } from './PhonebookList/PhonebookList';
import { nanoid } from 'nanoid';
import  PhonebookForm  from './PhonebookForm/PhonebookForm';

function useLocalStorage(key, initialState = null) {
  const [state, setState] = useState(() =>
    JSON.parse(localStorage.getItem(key)) ?? initialState
  );

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export const  App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return alert(`${name} is already in contacts!`);
    }

    const contact = { id: nanoid(), name, number };

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

    
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={addContact}/>
        <h2>Contacts</h2>
            <PhonebookFilter value={filter} onChange={filterContacts} />
            <PhonebookList
              contacts={filteredContacts}
              onDeleteButton={deleteContact}
            />
</Container>
    )
    };

  

