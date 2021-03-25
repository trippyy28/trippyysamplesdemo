import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const Login = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values) => {
        const res = await fetch("localhost:3000/login", {
          method: "POST",
          body: {
            email: values.email,
            password: values.password,
          },
        });
        if (res.isLoggedIn) {
          localStorage.set("authToken", res.jwtToken);
          window.location.reload();
        } else {
          console.log("Login failed");
        }
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label htmlFor="password">Password</label>
        <Field
          id="password"
          name="password"
          type="password"
          placeholder="please insert your password"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Login;
