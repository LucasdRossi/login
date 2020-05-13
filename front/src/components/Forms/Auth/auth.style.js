import styled from "styled-components";

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 55px;
  border: 2px solid ${(props) => (props.error ? "tomato" : "#bebfd0")};
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
  background-color: ${(props) =>
    props.disabled ? "#B0B0B5" : "#a2a3bb"} !important;
  color: #fff;
  border: 2px solid #9394aa;
  box-sizing: border-box;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "" : "#babbd4"} !important;
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

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  min-height: 20px;
  color: tomato;
  font-size: 0.8rem;
  margin-left: 10px;
`;
