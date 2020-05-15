import styled, { Keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  color: ${(props) => (props.active ? "#000000" : "#B0B0B5")};
  border-bottom: ${(props) => (props.active ? "2px solid #000000" : "none")};
  cursor: pointer;
`;

export const LinkWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
`;
