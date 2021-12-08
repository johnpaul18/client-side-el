import styled from "styled-components";

const FormContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 50px;
`;
const FormImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function FormWithBg({ image, children }) {
  return (
    <FormContainer>
      <FormImage src={image} alt="Nature" width="600" height="400" />
      {children}
    </FormContainer>
  );
}

export default FormWithBg;
