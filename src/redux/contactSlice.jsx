import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer } from "redux-persist"

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    onDeleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  }
});

const persistConfig = {
  key: 'contact',
  storage,
};
export const pesistContactReduser = persistReducer(
  persistConfig, contactSlice.reducer);

export const { addContact, onDeleteContact } = contactSlice.actions;
