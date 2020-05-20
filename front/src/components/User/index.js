import React from "react";

// STYLES
import { Wrapper, Text } from "./user.style";

const User = (props) => {
  const { user, logOut } = props;
  const { id, username } = user;

  return (
    <Wrapper>
      <div>
        <Text>{`${id} - ${username}`}</Text>
      </div>
    </Wrapper>
  );
};

export default User;
