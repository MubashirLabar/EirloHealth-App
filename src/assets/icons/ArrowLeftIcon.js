import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowLeftIcon = ({ size = 16, color = "#000" }) => (
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
    <Path d="m9 6-6 6 6 6M21 12H4M3 12h1" />
  </Svg>
);
export default ArrowLeftIcon;
