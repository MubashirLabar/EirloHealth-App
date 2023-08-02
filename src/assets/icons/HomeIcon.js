import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeIcon = ({ size = 16, color = "#000" }) => (
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
      d="M2 9.486a3 3 0 0 1 1.221-2.415l7.112-5.238 7.112 5.238a3 3 0 0 1 1.222 2.415v8.18a2.5 2.5 0 0 1-2.5 2.5h-2.334a1 1 0 0 1-1-1v-4.75a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v4.75a1 1 0 0 1-1 1H4.5a2.5 2.5 0 0 1-2.5-2.5v-8.18Z"
    />
  </Svg>
);
export default HomeIcon;
