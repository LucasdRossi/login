import React from "react";
import { Form, Field as FinalField } from "react-final-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// STYLES
import {
  InputWrapper,
  Input,
  Label,
  FieldWrapper,
  FormWrapper,
  Button,
} from "./auth.style";

const AuthForm = (props) => {
  const { mode, onSubmit } = props;

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }

        if (mode !== "login") {
          if (!values.confirmation) {
            errors.confirmation = "Required";
          } else if (values.confirmation !== values.password) {
            errors.confirmation = "Must match";
          }
        }
        return errors;
      }}
      render={({ handleSubmit, submitting, pristine }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <FieldWrapper type={mode}>
            <Field mode={mode} name="username" placeholder="Username" />
            <Field
              mode={mode}
              name="password"
              placeholder="Password"
              type="password"
            />
            {mode === "signup" && (
              <Field
                mode={mode}
                name="confirmation"
                placeholder="Confirmation"
                type="password"
              />
            )}
          </FieldWrapper>
          <Button type="submit" disabled={submitting || pristine}>
            {mode === "login" ? "LOG IN" : "SIGN UP"}
          </Button>
        </FormWrapper>
      )}
    />
  );
};

const Field = (props) => {
  return (
    <FinalField name={props.name}>
      {({ input, meta }) => (
        <InputWrapper>
          <Label>
            {(meta.error || meta.submitError) && meta.touched ? (
              <>
                <FontAwesomeIcon icon={faTimes} />
                <span style={{ marginLeft: 5 }}>
                  {meta.error || meta.submitError}
                </span>
              </>
            ) : (
              ""
            )}
          </Label>
          <Input
            {...input}
            type={props.type ? props.type : "text"}
            placeholder={props.placeholder}
            error={(meta.error || meta.submitError) && meta.touched}
          />
        </InputWrapper>
      )}
    </FinalField>
  );
};

export default AuthForm;
