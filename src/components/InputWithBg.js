import styled from "styled-components";
import { mobile } from "../responsive";

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 400px;
  margin: 5px;
  ${mobile({
    width: "100%",
    border: "2px solid #fdc005",
    height: "60px",
    borderRadius: "5px",
  })}
`;
const InputImage = styled.img`
  position: absolute;
  width: 100%;
  max-width: 400px;
  height: auto;
  ${mobile({
    display: "none",
  })}
`;

function InputWithBg({ image, children }) {
  return (
    <InputContainer>
      <InputImage src={image} alt="Nature" width="600" height="400" />
      {children}
    </InputContainer>
  );
}

export default InputWithBg;
