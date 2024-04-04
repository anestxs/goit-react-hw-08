import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";
import { useId } from "react";

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  const ValidationSchema = Yup.object().shape({
    email: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id={emailFieldId}
          ></Field>
          <ErrorMessage
            className={css["error-text"]}
            component="p"
            name="email"
          ></ErrorMessage>
        </div>

        <div className={css.wrapper}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={passwordFieldId}
          ></Field>
          <ErrorMessage
            className={css["error-text"]}
            component="p"
            name="password"
          ></ErrorMessage>
        </div>
        <button type="submit" className={css.btn}>
          Log in
        </button>
      </Form>
    </Formik>
  );
}
