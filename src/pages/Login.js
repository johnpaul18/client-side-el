import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center;
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
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  font-size: 24px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  color: ${(props) => props.color};
  text-decoration: underline;
  cursor: pointer;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Login = () => {
  const [forgotColor, setForgotColor] = useState("black");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const onSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });

    error && setForgotColor("red");
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" disabled={isFetching}>
            LOGIN
          </Button>
          <Link color={forgotColor}>DO NOT REMEMBER THE PASSWORD?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
