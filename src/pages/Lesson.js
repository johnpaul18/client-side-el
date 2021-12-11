import React from "react";
import { useParams } from "react-router-dom";

const Lesson = ({ lesson }) => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Lesson;
