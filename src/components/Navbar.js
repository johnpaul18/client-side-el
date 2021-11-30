import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  flex: 2;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 0;
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
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);

  console.log(user);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>C Learning</Logo>
        </Left>
        <Center></Center>
        <Right>
          {!user ? (
            <>
              <Link style={{ textDecoration: "none" }} to="/register">
                <MenuItem renderAs="button">REGISTER</MenuItem>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/login">
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/">
              <MenuItem>Logout</MenuItem>
            </Link>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
