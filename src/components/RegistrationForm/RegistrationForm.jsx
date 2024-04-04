import css from "./RegistrationForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";

import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
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
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          ></Field>
          <ErrorMessage
            className={css["error-text"]}
            name="name"
            component="p"
          ></ErrorMessage>
        </div>

        <div className={css.wrapper}>
          <label htmlFor={numberFieldId}>Email</label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id={numberFieldId}
          ></Field>
          <ErrorMessage
            className={css["error-text"]}
            name="email"
            component="p"
          ></ErrorMessage>
        </div>

        <div className={css.wrapper}>
          <label htmlFor={numberFieldId}>Password</label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={numberFieldId}
          ></Field>
          <ErrorMessage
            className={css["error-text"]}
            name="password"
            component="p"
          ></ErrorMessage>
        </div>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
