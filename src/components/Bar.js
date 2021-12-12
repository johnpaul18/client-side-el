import React from "react";
import styled from "styled-components";
import mobileBg from "./../img/mobile-bg.png";

const Container = styled.div`
  min-height: 50px;
  width: 100%;
  max-width: 300px;
  background: url(${mobileBg});
  border: 4px solid orange;
  border-radius: 15px;
  position: relative;

  margin: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bar = ({ children, click }) => {
  return <Container onClick={click}>{children}</Container>;
};

export default Bar;
