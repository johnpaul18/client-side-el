import * as React from "react";
import cytoscape from "cytoscape";
import cyCanvas from "cytoscape-canvas";
import styled from "styled-components";

cyCanvas(cytoscape);
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #546d73;
  z-index: 2;
`;

const Graph = ({ elements, map }) => {
  const container = React.useRef(null);
  const graph = React.useRef(cytoscape.Core);

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
        maxZoom: 3,
      });

      // graph.current.$("#q1").position({ x: 375, y: 410 });
      console.log(graph.current);
      graph.current.userPanningEnabled(true);
      graph.current.autolock(false);
      graph.current.on("tap", "node", function (evt) {
        var node = evt.target;
        console.log("tapped " + node.id());
        console.log(node.position(), 1);
      });

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
        // ctx.fillText("This text follows the model", 200, 300);

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

  background.src = map;
  background.color = "black";

  return <Container ref={container} />;
};

export default Graph;
