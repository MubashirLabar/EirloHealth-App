import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MinusIcon = ({ size = 24, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <Path d="M5 12h14" />
  </Svg>
);
export default MinusIcon;
