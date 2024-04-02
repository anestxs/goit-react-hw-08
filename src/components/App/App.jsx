import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <SearchBox></SearchBox>
      {error && <p className={css.errorText}>Reload the page!</p>}
      {loading && <p className={css.loadingText}>Loading...</p>}
      <ContactList></ContactList>
    </div>
  );
}
