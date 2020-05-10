import React, { useState } from "react";

// STYLES
import { Wrapper, Link, LinkWrapper, Button } from "./auth.style";

const Auth = (props) => {
  const { onLogin } = props;

  const [mode, setMode] = useState("login"); // false -> login | true -> signup

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
      <div>Form</div>
      <Button>{mode === "login" ? "LOG IN" : "SIGN UP"}</Button>
    </Wrapper>
  );
};

export default Auth;
