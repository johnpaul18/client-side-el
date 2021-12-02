import Navbar from "../components/Navbar";
import Graph from "../components/Graph";

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

const Home = () => {
  return (
    <div>
      <Navbar />
      <Graph elements={originalElements} />
    </div>
  );
};

export default Home;
