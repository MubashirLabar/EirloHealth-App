import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlusIcon = ({ size = 24, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <Path
      fill="#DC2626"
      fillRule="evenodd"
      d="M5.5 2.5A.5.5 0 0 0 5 3v2H3a.5.5 0 0 0-.5.5v1A.5.5 0 0 0 3 7h2v2a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 7 9V7h2a.5.5 0 0 0 .5-.5v-1A.5.5 0 0 0 9 5H7V3a.5.5 0 0 0-.5-.5h-1ZM4 3a1.5 1.5 0 0 1 1.5-1.5h1A1.5 1.5 0 0 1 8 3v1h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 9 8H8v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 4 9V8H3a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 3 4h1V3Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default PlusIcon;
