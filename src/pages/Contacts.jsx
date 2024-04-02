import PageTitle from "../components/PageTitle/PageTitle";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";

export default function Contacts() {
  return (
    <div>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <ContactList />
    </div>
  );
}
