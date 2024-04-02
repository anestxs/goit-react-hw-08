import css from "./AppBar.module.css";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {
  return (
    <header className={css.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
}
