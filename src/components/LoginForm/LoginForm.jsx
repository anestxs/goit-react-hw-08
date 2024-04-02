import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";

export default function LoginForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          Email
          <Field type="text" name="email" />
        </label>
        <label>
          Password
          <Field type="text" name="password" />
        </label>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
