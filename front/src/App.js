import React, { useState } from "react";
import microservice from "./configs/microservice";

// IMAGES
import Image from "./images/login-image.png";

// COMPONENTS
import Panel from "./components/Panel";
import Auth from "./components/Auth";
import DropCard from "./components/DropCard";
import User from "./components/User";

const App = () => {
  const [user, setUser] = useState();
  const [dropCard, setDropCard] = useState({ active: false });

  const onLogin = (user) => {
    console.log("user", user);
    setUser(user);
  };

  const onLogout = async () => {
    const [status, response] = await microservice("get", "/logout");
    if (status === "ok") {
      setUser(false);
    } else {
      console.log({ status, response });
    }
  };

  const handleDropCard = (type, message) => {
    setDropCard({ active: true, type, message });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {dropCard.active && (
        <DropCard
          message={dropCard.message}
          type={dropCard.type}
          setDropCard={setDropCard}
        />
      )}
      <Panel>
        {user ? (
          <User user={user} logOut={onLogout} />
        ) : (
          <>
            <img src={Image} height="100%" />
            <Auth onLogin={onLogin} dropCard={handleDropCard} />
          </>
        )}
      </Panel>
    </div>
  );
};

export default App;
