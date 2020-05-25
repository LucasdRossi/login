import React, { useState } from "react";

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
    setUser(user);
  };

  const onLogout = () => {
    setUser(false);
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
      <Panel for={user}>
        {user ? (
          <User user={user} logout={onLogout} />
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
