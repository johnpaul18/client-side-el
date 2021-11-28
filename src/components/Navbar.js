import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center>
          <Logo>C Learning</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
