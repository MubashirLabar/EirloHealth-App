import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ThermometerIcon = ({ size = 24, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="m7.879 17.793-1.172-1.171-.963.962a.828.828 0 0 0 1.172 1.172l.963-.963Zm.204-2.624a3 3 0 0 0 .425-.952l.73-2.925a1 1 0 0 1 .264-.465l4.962-4.963a2.95 2.95 0 0 1 4.172 4.172l-4.963 4.963a1 1 0 0 1-.464.263l-2.925.73a3 3 0 0 0-.952.426l-1.25-1.25Zm5.61 2.033-2.924.731a1 1 0 0 0-.465.263L8.33 20.17a2.828 2.828 0 0 1-4-4l1.974-1.974a1 1 0 0 0 .263-.464l.731-2.925a3 3 0 0 1 .79-1.394L13.05 4.45a4.95 4.95 0 0 1 7 7l-4.962 4.963a3 3 0 0 1-1.394.789Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      fillRule="evenodd"
      d="M17.207 7.293a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ThermometerIcon;
