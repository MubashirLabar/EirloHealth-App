import * as React from "react";
import Svg, { Path } from "react-native-svg";
const TaskIcon = ({ size, color = "#000" }) => (
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
      d="m1.5 16 9.167 4.167L19.833 16M1.5 10.583l9.167 4.167 9.166-4.167m0-5.416-9.166-3.334L1.5 5.167l9.167 4.166 9.166-4.166Z"
    />
  </Svg>
);
export default TaskIcon;
