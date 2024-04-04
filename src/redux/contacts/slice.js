import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  deleteContact,
  addContact,
  editContactName,
  editContactPhone,
} from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(editContactName.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(editContactName.fulfilled, (state, action) => {
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        state.isLoading = false;
      })
      .addCase(editContactName.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(editContactPhone.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(editContactPhone.fulfilled, (state, action) => {
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        state.isLoading = false;
      })
      .addCase(editContactPhone.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      }),
});

export default contactsSlice.reducer;
