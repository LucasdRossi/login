import styled from "styled-components";
import { Field as FinalField } from "react-final-form";

export const Field = styled(FinalField)`
  display: inline-block;
  width: 409px;
  height: 55px;
  border: 2px solid #bebfd0;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  padding: 5px;

  ::placeholder {
    color: #d3d5d4;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: ${(props) =>
    props.type === "login" ? "space-evenly" : "space-around"};
  height: 50%;
  align-items: center;
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
  cursor: pointer;
  &:hover {
    background-color: #babbd4 !important;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
