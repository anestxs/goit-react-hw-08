import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      ></input>
    </div>
  );
}
