import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BeakerIcon = ({ size = 24, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M16.5 7h-8a1 1 0 0 0 0 2v2.429a1 1 0 0 1-.151.528l-3.396 5.458C3.709 19.413 5.146 22 7.5 22h9.993c2.353 0 3.79-2.584 2.549-4.583l-3.392-5.46a1 1 0 0 1-.15-.528V9a1 1 0 1 0 0-2Zm-6 4.429V9h4v2.43a3 3 0 0 0 .451 1.582L16.186 15H8.811l1.236-1.986a3 3 0 0 0 .453-1.585ZM7.567 17l-.916 1.472A1 1 0 0 0 7.5 20h9.993a1 1 0 0 0 .85-1.528L17.428 17H7.567ZM14.5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BeakerIcon;
