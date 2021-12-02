const COLORS = {
  purp: "#43447a",
};

const nodeStyles = [
  {
    selector: "node",
    style: {
      "transition-property": "background-color border-color",
      "transition-duration": "0.3s",
      "transition-timing-function": "ease-in-sine",
      "background-color": "#43447a",
    },
  },
];
const edgeStyles = [
  {
    selector: "edge",
    style: {
      "curve-style": "bezier",
      "target-arrow-shape": "triangle",
      "target-arrow-color": "#43447a",
      "line-color": "#43447a",
    },
  },
];

export default [...nodeStyles, ...edgeStyles];
