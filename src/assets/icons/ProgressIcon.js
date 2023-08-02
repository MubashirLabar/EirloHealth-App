import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ProgressIcon = ({ size = 24, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M2.667 2.5a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v.485a1.5 1.5 0 0 1-.628 1.221L7.527 6l2.512 1.794a1.5 1.5 0 0 1 .628 1.22V9.5a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5v-.485a1.5 1.5 0 0 1 .628-1.221L5.806 6 3.295 4.206a1.5 1.5 0 0 1-.628-1.22V2.5Zm4 2.886 2.79-1.994a.5.5 0 0 0 .21-.407V2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v.485a.5.5 0 0 0 .209.407l2.79 1.994Zm0 1.228L3.876 8.608a.5.5 0 0 0-.21.407V9.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-.485a.5.5 0 0 0-.209-.407l-2.79-1.994Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      d="M8.667 10h-4V9.79a.5.5 0 0 1 .25-.433l1.25-.722a1 1 0 0 1 1 0l1.25.722a.5.5 0 0 1 .25.433V10Z"
    />
  </Svg>
);
export default ProgressIcon;
