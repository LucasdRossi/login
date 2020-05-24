import React, { useState } from "react";
import microservice from "./configs/microservice";
import Cookies from "js-cookie";

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
    // Cookies.set("userId", user.id);
  };

  const profileActions = async (action) => {
    const [status, response] = await microservice(
      action === "delete" ? action : "get",
      `/${action}`
    );
    if (status === "ok") {
      setUser(false);
      // Cookies.remove("userId");
    } else {
      handleDropCard(status, response.error);
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
          <User user={user} action={profileActions} />
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
