import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ButtonWithBg from "./../components/ButtonWithBg";
import Ide from "./../components/Ide";
import arrow from "./../img/arrow.png";
import { useParams, useHistory } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import Bar from "../components/Bar";
import { mobile } from "../responsive";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #546d73;
`;

const Top = styled.div`
  flex: 2;
`;
const Content = styled.div`
  flex: 18;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
`;
const Body = styled.div`
  width: 80%;
  max-width: 1000px;
  text-align: center;
  margin-bottom: 20px;
  font-size: 22px;
  color: white;
  text-align: left;
`;
const Bottom = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 100px;
`;

const Center = styled.div`
  display: flex;
  min-height: 60vh;
`;
const Left = styled.div`
  flex: 1;
`;
const TopicsPicker = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 5;
`;

const Text = styled.p`
  text-shadow: -1px -1px 0 #fdc005, 1px -1px 0 #fdc005, -1px 1px 0 #fdc005,
    1px 1px 0 #fdc005;
  color: #ab4235;
  font-size: 28px;
  font-weight: 700;
  z-index: 2;
`;

const Lesson = () => {
  const [topics, setTopics] = useState([]);
  const [topicNumber, setTopicnumber] = useState(0);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    publicRequest.get(`lesson/${id}`).then((res) => {
      setTopics([...res.data.data.lesson.topics]);
    });
  }, [id]);

  const next = () => {
    if (topics.length === topicNumber) history.push("/map");

    setTopicnumber(topicNumber + 1);
  };

  const topicsButton = topics.map((e, i) => (
    <Bar key={i} click={() => setTopicnumber(i)}>
      <Text>{e.title}</Text>
    </Bar>
  ));

  let check = topics.length ? (
    <Container>
      <Top></Top>
      <Center>
        <Left>
          <TopicsPicker>{topicsButton}</TopicsPicker>
        </Left>
        <Right>
          <Content>
            {topics[topicNumber].title && (
              <Title>{topics[topicNumber].title}</Title>
            )}
            {topics[topicNumber].content && (
              <Body>{topics[topicNumber].content}</Body>
            )}
            {topics[topicNumber].code && (
              <Ide preCode={topics[topicNumber].code}></Ide>
            )}
          </Content>
        </Right>
      </Center>
      <Bottom>
        {topics.length !== topicNumber + 1 && (
          <ButtonWithBg
            image={arrow}
            label={"NEXT"}
            click={next}
          ></ButtonWithBg>
        )}
      </Bottom>
    </Container>
  ) : (
    <p>Loading!</p>
  );

  return <>{check}</>;
};

export default Lesson;
