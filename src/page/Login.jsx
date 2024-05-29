import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Login = () => {
  return (
    <section>
      <Form
        method="post"
        className="car w-96 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <FormInput
          label="email"
          type="email"
          name="email"
          defaultValue="example@gmail.com"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          defaultValue="type here..."
        />
        <div className="mt-10">
          <SubmitBtn text="login" />
        </div>
        <button className="btn btn-secondary btn-block capitalize">
          guest user
        </button>
        <p className="text-center">
          Not a menber yet:
          <Link to={"/register"} className="text-primary">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
