import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
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
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email">
            {({ field }) => (
              <TextField
                {...field}
                // id={nameId}

                label="Enter your email"
                defaultValue="Default Value"
              />
            )}
          </Field>
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password">
            {({ field }) => (
              <TextField
                {...field}
                // id={nameId}

                label="Enter password"
                defaultValue="Default Value"
              />
            )}
          </Field>
        </label>
        <Button variant="outlined" type="submit">
          Log In
        </Button>
      </Form>
    </Formik>
  );
}
