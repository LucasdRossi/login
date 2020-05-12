import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 50%;
  height: 600px;
  background-color: #fff !important;
  margin-top: 13vh;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  visibility: visible;
  animation: ${fadeIn} 0.5s linear;
  transition: visibility 0.5s linear;
`;
