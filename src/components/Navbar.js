import React from "react";
import styled from "styled-components";
import "./style.css";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import signupBg from "./../img/signup.png";
import logo from "./../img/logo.png";
import ButtonWithBg from "./ButtonWithBg";
import { useHistory } from "react-router-dom";

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
const Logo = styled.img`
  font-weight: bold;
  width: auto;
  height: 100%;
  max-width: 200px;
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

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const history = useHistory();

  console.log(user);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={logo} />
        </Left>
        <Center></Center>
        <Right>
          {!user ? (
            <>
              <ButtonWithBg
                image={signupBg}
                label={"SIGNUP"}
                click={() => history.push("/register")}
              />
              <ButtonWithBg
                image={signupBg}
                label={"SIGNIN"}
                click={() => history.push("/login")}
              />
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
