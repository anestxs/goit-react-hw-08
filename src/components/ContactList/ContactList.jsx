import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li className={css["list-item"]} key={contact.id}>
            <Contact contact={contact}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
