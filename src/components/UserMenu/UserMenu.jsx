import css from "./UserMenu.module.css";

export default function UserMenu() {
  return (
    <div className={css}>
      <p>Welcome, User</p>
      <button type="button">Logout</button>
    </div>
  );
}
