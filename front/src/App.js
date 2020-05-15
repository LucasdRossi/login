import React, { useState } from "react";

// IMAGES
import Image from "./images/login-image.png";

// COMPONENTS
import Panel from "./components/Panel";
import Auth from "./components/Auth";

const App = () => {
  const [user, setUser] = useState({});

  const onLogin = (user) => {
    console.log("user", user);
    setUser(user);
  };

  const onError = (message) => {};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Panel>
        <img src={Image} height="100%" />
        <Auth onLogin={onLogin} onError={onError} />
      </Panel>
    </div>
  );
};

export default App;
