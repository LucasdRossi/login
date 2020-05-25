import React from "react";
import profilePic from "../../images/profile-pic.gif";

// STYLES
import {
  Wrapper,
  Text,
  Picture,
  ProfileWrapper,
  Button,
  ButtonWrapper,
} from "./user.style";

const User = (props) => {
  const { user, logout } = props;
  const { id, username } = user;

  return (
    <Wrapper>
      <ProfileWrapper>
        <Picture src={profilePic} alt="profile" />
        <Text>{`${id} - ${username}`}</Text>
      </ProfileWrapper>
      <ButtonWrapper>
        <Button onClick={logout}>LOG OUT</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default User;
