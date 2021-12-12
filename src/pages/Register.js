import styled from "styled-components";
import { mobile } from "../responsive";
import { useHistory } from "react-router";
import signupBg from "./../img/signup.png";
import inputBg from "./../img/input.png";
import signupBtn from "./../img/arrow.png";
import ButtonWithBg from "../components/ButtonWithBg";
import InputWithBg from "../components/InputWithBg";
import ContainerWithBg from "../components/ContainerWithBg";
import { publicRequest } from "./../requestMethods";

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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 50px;
  ${mobile({ padding: "5px" })}
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
  ${mobile({ fontSize: "18px", width: "100%" })}
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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

    publicRequest
      .post("auth/register", data)
      .then((res) => {
        console.log(res.data);
        history.push("/login");
      })
      .catch((e) => {});
  };

  return (
    <Container>
      <ContainerWithBg image={signupBg}>
        {/* <Title>CREATE AN ACCOUNT</Title> */}
        <Form onSubmit={onSubmit}>
          <InputWithBg image={inputBg}>
            <Input
              name="firstName"
              type="text"
              placeholder="first name"
              required
            />
          </InputWithBg>
          <InputWithBg image={inputBg}>
            <Input
              name="lastName"
              type="text"
              placeholder="last name"
              required
            />
          </InputWithBg>
          <InputWithBg image={inputBg}>
            <Input
              name="username"
              type="text"
              placeholder="username"
              required
            />
          </InputWithBg>
          <InputWithBg image={inputBg}>
            <Input name="email" type="email" placeholder="email" required />
          </InputWithBg>
          <InputWithBg image={inputBg}>
            <Input
              name="password"
              type="password"
              placeholder="password"
              required
            />
          </InputWithBg>
          <InputWithBg image={inputBg}>
            <Input
              name="passwordConfirm"
              type="password"
              placeholder="confirm password"
              required
            />
          </InputWithBg>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <ButtonContainer>
            <ButtonWithBg image={signupBtn} label="CREATE" left={true} />
          </ButtonContainer>
        </Form>
      </ContainerWithBg>
    </Container>
  );
};

export default Register;
