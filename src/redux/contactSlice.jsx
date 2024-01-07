import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filterContacts: [],
};
const ifContactExist = (contacts, name) => {
  return contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());
};

export const contactSlice = createSlice({
  name:'contact',
  initialState,
  reducers: {
    addContact:(state, action)=> {
      const data = action.payload;
      if (!ifContactExist(state.contacts, data.name)) {
        const contact = { ...data, id: nanoid() };
        state.contacts.push(contact);
      }else{
        alert(`${data.name} is already in contacts`);
      }
    },
    onDeleteContact: (state, action) => {
      const contactId = action.payload;
      state.contacts = state.contacts.filter((el) => el.id !== contactId);
    },
     getVisibleContact: (state, action) => {
      const filter = action.payload;
       state.filterContacts = state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
    },
 }
})

export const { addContact, onDeleteContact, getVisibleContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
export const selectvisivleContacts = (state) => state.contact.filterContacts;