import css from "./RegistrationForm.module.css";
import { Formik, Form, Field } from "formik";

export default function RegistrationForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          Username
          <Field type="text" name="name" />
        </label>
        <label>
          Email
          <Field type="text" name="email" />
        </label>
        <label>
          Password
          <Field type="text" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
