import { createStore } from "redux";
import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACTS } from "./types";

const initialStore = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
};

const reducer = (store = initialStore, {type, payload}) => {
  switch (type) {

    case ADD_CONTACT:
      const duplicateName = store.contacts.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase());
      if (duplicateName) {
        alert(`${payload.name} is already in your contacts`);
        return;
      };
      return { ...store, contacts: [...store.contacts, payload] };
    
    case REMOVE_CONTACT:
      const newContacts = store.contacts.filter(({ id }) => id !== payload);
      return { ...store, contacts: newContacts };
    
    case FILTER_CONTACTS:
      return { ...store, filter: payload };
    
    default:
      return store;
  }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// console.log(store.getState());

export default store;