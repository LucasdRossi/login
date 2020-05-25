import styled from "styled-components";
export { Button } from "../Forms/Auth/auth.style";

export const Wrapper = styled.div`
  align-self: center;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1.5rem;
`;

export const Picture = styled.img`
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  width: 90%;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
