import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowRightIcon = ({ size = 24, color = "#000" }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M8.293 5.293a1 1 0 0 1 1.32-.083l.094.083 6 6a1 1 0 0 1 .083 1.32l-.083.094-6 6a1 1 0 0 1-1.497-1.32l.083-.094L13.585 12 8.293 6.707a1 1 0 0 1-.083-1.32l.083-.094Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArrowRightIcon;
