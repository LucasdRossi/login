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
  const { user, action } = props;
  const { id, username } = user;

  return (
    <Wrapper>
      <ProfileWrapper>
        <Picture src={profilePic} alt="profile" />
        <Text>{`${id} - ${username}`}</Text>
      </ProfileWrapper>
      <ButtonWrapper>
        <Button onClick={() => action("logout")}>LOG OUT</Button>
        <Button onClick={() => action("delete")}>DELETE</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default User;
