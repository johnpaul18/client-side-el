import styled from "styled-components";

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  padding: 5px;
  justify-content: ${(props) => (props.left ? "left" : "center")};
  align-items: center;
  text-align: center;
  height: 150px;
  width: 200px;
`;
const ButtonImage = styled.img`
  position: absolute;
  width: 100%;
  max-width: 400px;
  height: auto;
`;
const ButtonName = styled.span`
  text-shadow: -1px -1px 0 #fdc005, 1px -1px 0 #fdc005, -1px 1px 0 #fdc005,
    1px 1px 0 #fdc005;
  color: #ab4235;
  font-size: 28px;
  font-weight: 700;
  z-index: 2;
  margin-left: ${(props) => (props.left ? "15px" : 0)};
`;

function ButtonWithBg({ image, label, left = false }) {
  return (
    <ButtonContainer left={left}>
      <ButtonImage src={image} alt="Nature" width="600" height="400" />
      <ButtonName left={left}>{label}</ButtonName>
    </ButtonContainer>
  );
}

export default ButtonWithBg;
