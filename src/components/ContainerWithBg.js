import styled from "styled-components";
import { mobile } from "../responsive";
import mobilBg from "./../img/mobile-bg.png";

const ContainerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 50px;
  overflow: hidden;
  ${mobile({ width: "100%" })}
`;
const ContainerImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  ${mobile({
    display: "none",
    content: `url(${mobilBg})`,
    background: "brown",
  })}
`;

function ContainerWithBg({ image, children }) {
  return (
    <ContainerContainer>
      <ContainerImage src={image} alt="Nature" width="600" height="400" />
      {children}
    </ContainerContainer>
  );
}

export default ContainerWithBg;
