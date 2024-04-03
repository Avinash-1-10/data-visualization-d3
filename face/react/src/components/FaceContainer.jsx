import React from "react";

const FaceContainer = ({ children }) => {
  const height = 500;
  const width = 960;
  const centerX = width / 2;
  const centerY = height / 2;

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>{children}</g>
    </svg>
  );
};

export default FaceContainer;
