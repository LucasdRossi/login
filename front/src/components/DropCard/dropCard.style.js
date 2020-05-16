import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    margin-top: -30px;
  }

  to {
    margin-top: 20px;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  margin: 20px;
  background-color: ${(props) =>
    props.type === "error" ? "tomato" : "lightGreen"};
  color: #fff;
  font-size: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  animation: ${(props) => (props.fade === "in" ? fadeIn : fadeOut)}
    ${(props) => (props.fade === "in" ? "0.6s" : "0.9s")} linear;
`;
