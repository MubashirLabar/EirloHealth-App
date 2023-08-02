import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronDownIcon = ({ size = 20, color = "#8F9BB3" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M4.41 6.91c.301-.3.774-.323 1.1-.069l.08.07L10 11.32l4.41-4.41c.301-.3.774-.324 1.1-.07l.08.07c.3.3.323.773.069 1.1l-.07.078-5 5c-.3.3-.773.324-1.1.07l-.078-.07-5-5a.833.833 0 0 1 0-1.178Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ChevronDownIcon;
