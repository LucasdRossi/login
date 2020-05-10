import styled from "styled-components";

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
  text-decoration-line: ${(props) => (props.active ? "underline" : "none")};
  cursor: pointer;
`;

export const LinkWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: 1.1rem;
  background-color: #a2a3bb !important;
  color: #fff;
  border: 2px solid #9394aa;
  box-sizing: border-box;
  font-weight: bold;
  &:hover {
    background-color: #babbd4 !important;
  }
`;
