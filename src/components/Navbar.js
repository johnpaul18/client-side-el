import React from "react";
import styled from "styled-components";
import "./style.css";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import signupBg from "./../img/signup.png";
import loginBg from "./../img/signin.png";
import logo from "./../img/logo.png";
import ButtonWithBg from "./ButtonWithBg";

const Container = styled.div`
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 30px 20px;
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
const Logo = styled.div`
  font-weight: bold;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 300px;
  ${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 40px;
  font-weight: 900;
  cursor: pointer;
  margin-left: 25px;
  text-shadow: -1px -1px 0 #fdc005, 1px -1px 0 #fdc005, -1px 1px 0 #fdc005,
    1px 1px 0 #fdc005;
  color: #ab4235;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const MenuBg = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);

  console.log(user);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo img={logo} />
        </Left>
        <Center></Center>
        <Right>
          {!user ? (
            <>
              <Link style={{ textDecoration: "none" }} to="/register">
                <ButtonWithBg image={signupBg} label={"SIGNUP"} />
              </Link>
              <Link style={{ textDecoration: "none" }} to="/login">
                <ButtonWithBg image={loginBg} label={"SIGNIN"} />
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
