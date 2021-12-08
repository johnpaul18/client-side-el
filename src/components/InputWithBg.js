import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 400px;
  margin: 5px;
`;
const InputImage = styled.img`
  position: absolute;
  width: 100%;
  max-width: 400px;
  height: auto;
`;

function InputWithBg({ image, children }) {
  return (
    <InputContainer>
      <InputImage src={image} alt="Nature" width="600" height="400" />
      {children}
    </InputContainer>
  );
}

export default InputWithBg;
