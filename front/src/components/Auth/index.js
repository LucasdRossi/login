import React, { useState } from "react";

// STYLES
import { Wrapper, Link, LinkWrapper } from "./auth.style";

// FORM

import { AuthForm } from "../Forms";

const Auth = (props) => {
  const [mode, setMode] = useState("login");

  const { onLogin } = props;

  const onSubmit = (values) => {
    console.log(values);
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
      <AuthForm type={mode} onSubmit={onSubmit} />
    </Wrapper>
  );
};

export default Auth;
