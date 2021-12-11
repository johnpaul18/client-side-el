import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import { useSelector } from "react-redux";
import FormWithBg from "../components/FormWithBg";
import SigninBg from "./../img/signup.png";
import InputWithBg from "../components/InputWithBg";
import inputBg from "./../img/input.png";
import ButtonWithBg from "../components/ButtonWithBg";
import signinBtn from "./../img/arrow.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #546d73;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
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
  font-size: 26px;
  font-weight: 900;
  text-align: center;
  z-index: 2;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  color: white;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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

    error && setForgotColor(true);
  };

  return (
    <Container>
      <FormWithBg image={SigninBg}>
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
          <Button type="submit" disabled={isFetching}>
            <ButtonWithBg image={signinBtn} label="SIGN IN" left={true} />
          </Button>
          {forgotColor && <Link>DO NOT REMEMBER THE PASSWORD?</Link>}
        </Form>
      </FormWithBg>
    </Container>
  );
};

export default Login;
