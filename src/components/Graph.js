import * as React from "react";
import cytoscape from "cytoscape";
import cyCanvas from "cytoscape-canvas";
import styled from "styled-components";
import Map from "./../img/map.png";

import style from "./style";

cyCanvas(cytoscape);

const Container = styled.div`
  width: 600px;
  height: 900px;
`;

const Graph = ({ elements }) => {
  const container = React.useRef(null);
  const graph = React.useRef(cytoscape.Core);
  const layout = React.useRef(cytoscape.Layouts);

  const background = new Image();
  background.onload = () => {
    if (!graph.current) {
      graph.current = cytoscape({
        elements,
        style: [
          {
            selector: "node",
            css: {
              label: "data(name)",
              backgroundColor: "red",
            },
          },
          {
            selector: "edge",
            css: {
              "curve-style": "bezier",
              "target-arrow-shape": "triangle",
            },
          },
        ],
        layout: {
          name: "preset",
        },
        container: container.current,
      });

      graph.current.userPanningEnabled(false);
      graph.current.$("#q1").position({ x: 375, y: 410 });
      graph.current.$("#q1").position({ x: 375, y: 410 });
      graph.current.autolock(false);
      graph.current.on("tap", "node", function (evt) {
        var node = evt.target;
        console.log("tapped " + node.id());
      });

      console.log(graph.current.$("#q1").position());

      const bottomLayer = graph.current.cyCanvas({
        zIndex: -1,
      });

      const canvas = bottomLayer.getCanvas();
      const ctx = canvas.getContext("2d");

      graph.current.on("render cyCanvas.resize", (evt) => {
        bottomLayer.resetTransform(ctx);
        bottomLayer.clear(ctx);
        bottomLayer.setTransform(ctx);

        ctx.save();
        // Draw a background
        ctx.drawImage(background, 0, 0);

        // Draw text that follows the model
        ctx.font = "24px Helvetica";
        ctx.fillStyle = "black";
        ctx.fillText("This text follows the model", 200, 300);

        // Draw shadows under nodes
        ctx.shadowColor = "black";
        ctx.shadowBlur = 25 * graph.current.zoom();
        ctx.fillStyle = "white";
        graph.current.nodes().forEach((node) => {
          const pos = node.position();
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 10, 0, 2 * Math.PI, false);
          ctx.fill();
        });
        ctx.restore();

        // Draw text that is fixed in the canvas
        // bottomLayer.resetTransform(ctx);
        // ctx.save();
        // ctx.font = "24px Helvetica";
        // ctx.fillStyle = "red";
        // ctx.fillText("This text is fixed", 200, 200);
        // ctx.restore();
      });
    }
  };

  background.src = Map;

  return <Container className="graph" ref={container} />;
};

export default Graph;
