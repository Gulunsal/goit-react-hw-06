import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push({
        ...payload,
        id: crypto.randomUUID(),
      });
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },
});

// Actions
export const { addContact, deleteContact } = contactSlice.actions;

// Selectors
export const selectContacts = (state) => state.contacts.items;

// Reducer
export default contactSlice.reducer;
