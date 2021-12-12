import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #4f686d;
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
