import React from "react";
import Graph from "../components/Graph";
import map from "./../img/map3.png";

const originalElements = {
  nodes: [
    { data: { id: "q1", name: "Introduction" }, position: { x: 243, y: 382 } },
    { data: { id: "q2", name: "Module1" }, position: { x: 259, y: 327 } },
    { data: { id: "q3", name: "Module2" }, position: { x: 181, y: 337 } },
    { data: { id: "q4", name: "Module3" }, position: { x: 259, y: 272 } },
  ],
  edges: [
    { data: { source: "q1", target: "q2" } },
    { data: { source: "q2", target: "q3" } },
    { data: { source: "q3", target: "q4" } },
  ],
};

const Map = () => {
  return <Graph elements={originalElements} map={map} />;
};

export default Map;
