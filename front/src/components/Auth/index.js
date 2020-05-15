import React, { useState } from "react";
import microservice from "../../configs/microservice";

// STYLES
import { Wrapper, Link, LinkWrapper } from "./auth.style";

// FORM
import { AuthForm } from "../Forms";

const Auth = (props) => {
  const [mode, setMode] = useState("login"); // login || signup

  const { onLogin, onError } = props;

  const onSubmit = async (values) => {
    const [status, response] = await microservice("post", `/${mode}`, values);
    if (status === "error") {
      onError(response);
    } else {
      onLogin(response.user);
    }
  };

  const toggleMode = (newMode) => {
    if (mode !== newMode) {
      setMode(newMode);
    }
  };

  return (
    <Wrapper>
      <LinkWrapper>
        <Link active={mode === "login"} onClick={() => toggleMode("login")}>
          LOG IN
        </Link>
        <Link active={mode === "signup"} onClick={() => toggleMode("signup")}>
          SIGN UP
        </Link>
      </LinkWrapper>
      <AuthForm mode={mode} onSubmit={onSubmit} />
    </Wrapper>
  );
};

export default Auth;
