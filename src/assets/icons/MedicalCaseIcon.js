import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MedicalCaseIcon = ({ size = 24, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M3.5 11a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4v-6Zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-10Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M12.5 11a1 1 0 0 0-1 1v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 0 0-1-1ZM10.5 5a1 1 0 0 0-1 1v1h-2V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h-2V6a1 1 0 0 0-1-1h-4Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default MedicalCaseIcon;
