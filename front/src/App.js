import React, { useState } from "react";

// IMAGES
import Image from "./images/login-image.png";

// COMPONENTS
import Panel from "./components/Panel";
import Auth from "./components/Auth";

const App = () => {
  const [user, setUser] = useState({});
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
        <Auth onLogin={setUser} />
      </Panel>
    </div>
  );
};

export default App;
