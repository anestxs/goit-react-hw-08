import css from "./ErrorMessage.module.css";
export default function ErrorMessage() {
  return (
    <div>
      <b className={css.text}>Something went wrong, try again!</b>
    </div>
  );
}
