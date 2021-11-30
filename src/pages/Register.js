import styled from "styled-components";
import { mobile } from "../responsive";
import { useHistory } from "react-router";
import axios from "axios";

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
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      passwordConfirm: e.target.passwordConfirm.value,
    };

    axios
      .post("http://localhost:8000/api/v1/auth/register", data)
      .then((res) => {
        console.log(res.data);
        history.push("/login");
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={onSubmit}>
          <Input
            name="firstName"
            type="text"
            placeholder="first name"
            required
          />
          <Input name="lastName" type="text" placeholder="last name" required />
          <Input name="username" type="text" placeholder="username" required />
          <Input name="email" type="email" placeholder="email" required />
          <Input
            name="password"
            type="password"
            placeholder="password"
            required
          />
          <Input
            name="passwordConfirm"
            type="password"
            placeholder="confirm password"
            required
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
