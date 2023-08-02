import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIcon = ({ size = 16, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.333 13.333a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM14.667 14.667 12 12"
    />
  </Svg>
);
export default SearchIcon;
