import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${(props) => (props.for ? "20%" : "50%")};
  height: 600px;
  background-color: #fff !important;
  margin-top: 13vh;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
`;
