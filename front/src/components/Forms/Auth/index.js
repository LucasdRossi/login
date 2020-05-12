import React from "react";
import { Form } from "react-final-form";

import { Field, FieldWrapper, Button, FormWrapper } from "./auth.style";

const AuthForm = (props) => {
  const { type, onSubmit } = props;

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <FieldWrapper type={type}>
            <div>
              <Field
                name="username"
                component="input"
                type="text"
                placeholder="Username"
              />
            </div>
            <div>
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="Password"
              />
            </div>
            {type === "signup" && (
              <div>
                <Field
                  name="confirmation"
                  component="input"
                  type="password"
                  placeholder="Confirmation"
                />
              </div>
            )}
          </FieldWrapper>
          <Button type="submit">
            {type === "login" ? "LOG IN" : "SIGN UP"}
          </Button>
        </FormWrapper>
      )}
    />
  );
};

export default AuthForm;
