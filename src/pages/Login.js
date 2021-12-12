import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, elements } from "../redux/apiCalls";
import { useSelector } from "react-redux";
import ContainerWithBg from "../components/ContainerWithBg";
import SigninBg from "./../img/signup.png";
import InputWithBg from "../components/InputWithBg";
import inputBg from "./../img/input.png";
import ButtonWithBg from "../components/ButtonWithBg";
import signinBtn from "./../img/arrow.png";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #546d73;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  z-index: 2;
`;
const Input = styled.input`
  width: 70%;
  background-color: transparent;
  outline: none;
  border: none;
  text-shadow: -1px -1px 0 #fdc005, 1px -1px 0 #fdc005, -1px 1px 0 #fdc005,
    1px 1px 0 #fdc005;
  color: #ab4235;
  font-weight: 900;
  text-align: center;
  z-index: 2;
  font-size: 26px;
  ${mobile({ fontSize: "18px", width: "100%" })}
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  color: white;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const [forgotColor, setForgotColor] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const onSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    elements(dispatch);
    error && setForgotColor(true);
  };

  return (
    <Container>
      <ContainerWithBg image={SigninBg}>
        {/* <Title>SIGN IN</Title> */}
        <Form onSubmit={onSubmit}>
          <InputWithBg image={inputBg}>
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputWithBg>
          <InputWithBg image={inputBg}>
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputWithBg>
          <ButtonContainer>
            <ButtonWithBg
              image={signinBtn}
              label="SIGN IN"
              left={true}
              disabled={isFetching}
            />
          </ButtonContainer>
          {forgotColor && <Link>DO NOT REMEMBER THE PASSWORD?</Link>}
        </Form>
      </ContainerWithBg>
    </Container>
  );
};

export default Login;
