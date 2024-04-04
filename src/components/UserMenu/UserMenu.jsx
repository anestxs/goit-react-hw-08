import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <b>Welcome, {user.name}</b>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
}
