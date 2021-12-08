import React from "react";
import styled from "styled-components";
import icon from "./../img/logo.png";
import { Link } from "react-router-dom";
import arrow from "./../img/profileMenu.png";
import ButtonWithBg from "./ButtonWithBg";
import FormWithBg from "./FormWithBg";
import board from "./../img/signup.png";
import play from "./../img/play.png";
import avatar from "./../img/avatar.png";

const Container = styled.div`
  min-height: 100vh;
`;
const Top = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: red;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Left = styled.div`
  flex: 2;
`;
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

const Center = styled.div`
  flex: 5;
`;
const BoardWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Profile = () => {
  return (
    <Container>
      <Top />
      <Wrapper>
        <Left>
          <MenuWrapper>
            <Avatar src={avatar} />
            <ButtonWithBg image={arrow} label={"UPDATE PROFILE"} />
            <ButtonWithBg image={arrow} />
          </MenuWrapper>
        </Left>
        <Center>
          <BoardWrapper>
            <FormWithBg image={board}>
              <div style={{ height: "700px" }}></div>
            </FormWithBg>
          </BoardWrapper>
        </Center>
        <Right>
          <Link style={{ textDecoration: "none" }} to="/map">
            <ButtonWithBg image={play} />
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Profile;
