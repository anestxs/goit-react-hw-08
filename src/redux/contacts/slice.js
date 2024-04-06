import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations";
import { logout } from "../auth/operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
    isModalOpen: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isError = null;
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
        state.isError = null;
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
        state.isError = null;
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
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.isError = null;
        state.isLoading = false;
      }),
});

export default contactsSlice.reducer;
