import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import FaceContainer from "./FaceContainer";
import Eyes from "./Eyes";
import Mouth from "./Mouth";

const Face = () => {
  const height = 500;
  const centerY = height / 2;
  const strokeWidth = 10;
  const eyeOffsetX = 100;
  const eyeOffsetY = 90;
  const eyeRadius = 50;
  const mouthWidth = 20;
  const mouthRadius = 100;

  return (
    <div>
      <FaceContainer>
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
      </FaceContainer>
    </div>
  );
};

export default Face;
