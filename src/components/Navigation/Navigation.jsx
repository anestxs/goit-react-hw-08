import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/contacts">
        Contacts
      </NavLink>
    </div>
  );
}
