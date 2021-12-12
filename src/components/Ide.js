import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import AceEditor from "react-ace";
import { publicRequest } from "../requestMethods";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-terminal";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 500px;
  background: grey;
  display: flex;
  border: 1px solid black;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Box = styled.div`
  flex: ${(props) => props.flex};
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const InputBox = styled.div`
  flex: 1;
`;
const OutputBox = styled.div`
  background: black;
  color: white;
  flex: 1;
  font-size: 22px;
  box-sizing: border-box;
  border: 1px solid grey;
  padding: 5px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  width: 100%;
  background: white;
  text-align: center;
  border: 1px solid grey;
  font-weight: 900;
  box-sizing: border-box;
`;
const Button = styled.button`
  min-height: 40px;
  font-weight: 900;
`;

const Ide = ({ preCode }) => {
  const [code, setCode] = useState("");

  useEffect(() => {
    if (preCode) setCode(preCode);
  }, [preCode]);

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const onChange = (newValue) => {
    console.log(newValue);
    setCode(newValue);
  };
  const onChangeInput = (newValue) => {
    setInput(newValue);
  };

  const getOutput = () => {
    setOutput("Loading...");

    publicRequest
      .post("https://c-compiler-api.herokuapp.com/", {
        code: code,
        input: input,
      })
      .then(function (response) {
        setOutput(
          response.data.body.output
            .replaceAll(/jdoodle/gi, "Jpaul")
            .replaceAll(/nutpan/gi, "gmail")
        );
        console.log(123);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Container>
      <Left>
        <Box flex={2}>
          <Title>
            <h2>CODE</h2>
          </Title>
          <InputBox>
            <AceEditor
              placeholder="Start Coding!"
              mode="java"
              theme="terminal"
              fontSize={18}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              value={code}
              onChange={onChange}
              style={{ height: "100%" }}
            />
          </InputBox>
        </Box>
        <Box flex={1}>
          <Title>
            <h2>INPUT</h2>
          </Title>
          <InputBox>
            <AceEditor
              placeholder="Enter your input!"
              mode="java"
              theme="terminal"
              fontSize={14}
              highlightActiveLine={true}
              value={input}
              onChange={onChangeInput}
              style={{ height: "100%", fontFamily: "monospace" }}
            />
          </InputBox>
        </Box>
      </Left>
      <Right>
        <Box flex={1}>
          <Title>
            <h2>OUTPUT</h2>
          </Title>
          <OutputBox>{output}</OutputBox>
          <Button onClick={getOutput}>
            <h2>RUN</h2>
          </Button>
        </Box>
      </Right>
    </Container>
  );
};

export default Ide;
