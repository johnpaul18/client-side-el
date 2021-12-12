import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useHistory } from "react-router-dom";
import arrow from "./../img/profileMenu.png";
import ButtonWithBg from "./ButtonWithBg";
import ContainerWithBg from "./ContainerWithBg";
import board from "./../img/signup.png";
import avatar from "./../img/avatar.png";
import mobileBg from "./../img/mobile-bg.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./../redux/userRedux";
import Bar from "./Bar";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    #4f686d center;
  background-repeat: no-repeat;
  background-size: auto;
`;
const Top = styled.div`
  width: 100%;
  min-height: 150px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  max-height: 700px;
`;
const Left = styled.div`
  flex: 1;
  margin-right: 10px;
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

const Text = styled.p`
  text-shadow: -1px -1px 0 #fdc005, 1px -1px 0 #fdc005, -1px 1px 0 #fdc005,
    1px 1px 0 #fdc005;
  color: #ab4235;
  font-size: 28px;
  font-weight: 700;
  z-index: 2;
`;

const Center = styled.div`
  flex: 20;
  margin-left: 10px;
  ${mobile({ display: "none" })}
`;
const BoardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Exp = styled.div`
  width: 70%;
  background: yellow;
  height: 100%;
  border-radius: 11px;
  position: absolute;
  left: 0;
`;

const Profile = () => {
  let user = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    user = null;
    dispatch(logout());
  };
  return (
    <Container>
      <Top>
        <Bar>
          <Exp></Exp>
          <Text>1239EXP</Text>
        </Bar>
      </Top>
      <Wrapper>
        <Left>
          <MenuWrapper>
            <Avatar onClick={logoutHandler} src={avatar} />
            <Bar>
              <Text>{user.firstName}</Text>
            </Bar>
            <ButtonWithBg
              image={arrow}
              label={<span>LEARN</span>}
              click={() => history.push("/map")}
            />
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
            {/* <ButtonWithBg image={arrow} label={<span>BADGES</span>} />
            <ButtonWithBg image={arrow} label={<span>ACHIEVEMENTS</span>} />
            <ButtonWithBg
              image={arrow}
              label={
                <span>
                  LEADER
                  <br />
                  BOARD
                </span>
              }
            /> */}
            <ButtonWithBg
              click={logoutHandler}
              image={arrow}
              label={<span>Logout</span>}
            />
          </MenuWrapper>
        </Left>
        <Center>
          <BoardWrapper>
            <ContainerWithBg image={board}>
              <div style={{ height: "700px" }}></div>
            </ContainerWithBg>
          </BoardWrapper>
        </Center>
      </Wrapper>
    </Container>
  );
};

export default Profile;
