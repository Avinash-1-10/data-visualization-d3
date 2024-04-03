import React from "react";
import BackgroundCircle from "./components/BackgroundCircle";
import Eyes from "./components/Eyes";
import Mouth from "./components/Mouth";

const App = () => {
  const height = 500;
  const width = 960;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;
  const eyeOffsetX = 100;
  const eyeOffsetY = 90;
  const eyeRadius = 50;
  const mouthWidth = 20;
  const mouthRadius = 100;

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <BackgroundCircle
            radius={centerY - strokeWidth / 2}
            strokeWidth={strokeWidth}
          />
          <Eyes
            eyeOffsetX={eyeOffsetX}
            eyeOffsetY={eyeOffsetY}
            eyeRadius={eyeRadius}
          />
          <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
        </g>
      </svg>
    </div>
  );
};

export default App;
