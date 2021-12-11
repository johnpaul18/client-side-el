import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import arrow from "./../img/profileMenu.png";
import ButtonWithBg from "./ButtonWithBg";
import FormWithBg from "./FormWithBg";
import board from "./../img/signup.png";
import play from "./../img/play.png";
import avatar from "./../img/avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./../redux/userRedux";

const Container = styled.div`
  min-height: 100vh;
`;
const Top = styled.div`
  width: 100%;
  min-height: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;
const Left = styled.div`
  flex: 3;
`;
const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;
const Avatar = styled.img`
  width: 70%;
  height: auto;
  border-radius: 50%;
  margin: 5px;
`;

const Name = styled.p`
  text-shadow: -1px -1px 0 #fdc005, 1px -1px 0 #fdc005, -1px 1px 0 #fdc005,
    1px 1px 0 #fdc005;
  color: #ab4235;
  font-size: 28px;
  font-weight: 700;
`;

const Center = styled.div`
  flex: 9;
`;
const BoardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
  flex: 2;
`;

const Profile = () => {
  let user = useSelector((state) => state.user.currentUser.data);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    user = null;
    dispatch(logout());
  };
  return (
    <Container>
      <Top></Top>
      <Wrapper>
        <Left>
          <MenuWrapper>
            <Avatar onClick={logoutHandler} src={avatar} />
            <Name>{user.firstName}</Name>
            {/* <Link style={{ textDecoration: "none" }} to="/map">
              <ButtonWithBg image={play} label={<span>LEARN</span>} />
            </Link> */}
            <Link style={{ textDecoration: "none" }} to="/map">
              <ButtonWithBg image={arrow} label={<span>LEARN</span>} />
            </Link>
            <ButtonWithBg
              image={arrow}
              label={
                <span>
                  UPDATE
                  <br />
                  PROFILE
                </span>
              }
            />
            <ButtonWithBg
              click={logoutHandler}
              image={arrow}
              label={<span>Logout</span>}
            />
          </MenuWrapper>
        </Left>
        <Center>
          <BoardWrapper>
            <FormWithBg image={board}>
              <div style={{ height: "700px" }}></div>
            </FormWithBg>
          </BoardWrapper>
        </Center>
        {/* <Right>
          <MenuWrapper>
            <Link style={{ textDecoration: "none" }} to="/map">
              <ButtonWithBg image={play} label={<span>PLAY</span>} />
            </Link>
          </MenuWrapper>
        </Right> */}
      </Wrapper>
    </Container>
  );
};

export default Profile;
