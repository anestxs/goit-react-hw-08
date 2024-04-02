// import css from "./App.module.css";
// import ContactForm from "../ContactForm/ContactForm";
// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contacts/operations";
// import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/Home"));
const RegisterPage = lazy(() => import("../../pages/Register"));
const LoginPage = lazy(() => import("../../pages/Login"));
const ContactsPage = lazy(() => import("../../pages/Contacts"));

export default function App() {
  // const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>

    // <div className={css.container}>
    //   <h1>Phonebook</h1>
    //
    //   <SearchBox></SearchBox>
    //   {error && <p className={css.errorText}>Reload the page!</p>}
    //   {loading && <p className={css.loadingText}>Loading...</p>}
    //   <ContactList></ContactList>
    // </div>
  );
}
