import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CheckIcon = ({ size = 24, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M9.187 3.146a.5.5 0 0 1 .042.66l-.042.048-2.5 2.5a.5.5 0 0 1-.749-.66l.042-.048 2.5-2.5a.5.5 0 0 1 .707 0ZM1.64 5.605l.047.041 2.5 2.5a.5.5 0 0 1-.66.75l-.047-.042-2.5-2.5a.5.5 0 0 1 .61-.784l.05.035Zm10.047-2.459a.5.5 0 0 0-.707 0L6.333 7.793 4.187 5.646l-.047-.041a.5.5 0 0 0-.66.749l2.5 2.5.047.041a.5.5 0 0 0 .66-.041l5-5 .042-.048a.5.5 0 0 0-.042-.66Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CheckIcon;
