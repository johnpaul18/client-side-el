import styled from "styled-components";
import { mobile } from "../responsive";

const ButtonContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: ${(props) => (props.left ? "left" : "center")};
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  margin: 5px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ${mobile({ height: "100px", width: "90%" })}
`;
const ButtonImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const ButtonName = styled.span`
  text-shadow: -1px -1px 0 #fdc005, 1px -1px 0 #fdc005, -1px 1px 0 #fdc005,
    1px 1px 0 #fdc005;
  color: #ab4235;
  font-size: 28px;
  font-weight: 700;
  z-index: 2;
  margin-left: ${(props) => (props.left ? "15px" : 0)};
  ${mobile({
    fontSize: "16px",
    fontWeight: 700,
    width: "100%",
    textAlign: "center",
  })}
`;

function ButtonWithBg({ image, label, left = false, click }) {
  return (
    <ButtonContainer left={left} onClick={click}>
      <ButtonImage src={image} alt="Nature" width="600" height="400" />
      <ButtonName left={left}>{label}</ButtonName>
    </ButtonContainer>
  );
}

export default ButtonWithBg;
