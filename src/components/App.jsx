// import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "redux/actions";

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

import { PhonebookApp, PhonebookTitle, ContactsTitle } from "./App.styled";



export function App() {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const dispatch = useDispatch();

  const onRemoveContact = (payload) => {
    const action = removeContact(payload);
    dispatch(action);
  }

  const getFilterResults = () => {
  const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  const filterResults = getFilterResults();

  return (

    <PhonebookApp>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList contacts={filterResults} onDelete={onRemoveContact} />
    </PhonebookApp>
  );
};