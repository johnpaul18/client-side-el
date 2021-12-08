import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import { useSelector } from "react-redux";
import styled from "styled-components";

const originalElements = {
  nodes: [
    { data: { id: "j", name: "Introduction" }, position: { x: 150, y: 50 } },
    { data: { id: "e", name: "Module1" }, position: { x: 600, y: 50 } },
    { data: { id: "k", name: "Module2" }, position: { x: 150, y: 400 } },
    { data: { id: "g", name: "Module3" }, position: { x: 600, y: 400 } },
  ],
  edges: [
    { data: { source: "j", target: "e" } },
    { data: { source: "e", target: "k" } },
    { data: { source: "k", target: "g" } },
  ],
};

const Container = styled.div`
  min-height: 100vh;
  background-color: #4f686d;
`;
const Home = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      {user ? <Profile /> : <Navbar />}
      {/* <Graph elements={originalElements} /> */}
    </Container>
  );
};

export default Home;
