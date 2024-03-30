import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Box
      sx={{
        backgroundColor: "#f2f1f0",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form
          style={{
            width: "320px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            fontWeight: "600",
          }}
          autoComplete="off"
        >
          <Box
            sx={{
              // display: "flex",
              // flexDirection: "column",
              // gap: "4px",
              // width: "100%",
              color: "#524f4e",
              // fontWeight: "500",
            }}
          >
            <label
              style={{ display: "flex", flexDirection: " column", gap: "4px" }}
            >
              Email
              <Field type="email" name="email">
                {({ field }) => (
                  <TextField
                    sx={{
                      backgroundColor: "#f5f8fa",
                    }}
                    {...field}
                    // id={nameId}

                    label="Enter your email"
                    defaultValue="Default Value"
                  />
                )}
              </Field>
            </label>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "100%",
              color: "#524f4e",
              fontWeight: "500",
            }}
          >
            <label
              style={{ display: "flex", flexDirection: " column", gap: "4px" }}
            >
              Password
              <Field type="password" name="password">
                {({ field }) => (
                  <TextField
                    sx={{
                      backgroundColor: "#f5f8fa",
                    }}
                    {...field}
                    // id={nameId}

                    label="Enter password"
                    defaultValue="Default Value"
                  />
                )}
              </Field>
            </label>
          </Box>
          <Button
            variant="outlined"
            type="submit"
            sx={{ backgroundColor: "#d4eafc", border: "1px solid #2a78bd " }}
          >
            Log In
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}
