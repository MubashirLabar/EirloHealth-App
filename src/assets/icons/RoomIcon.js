import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RoomIcon = ({ size, color = "#000" }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M13.5 2h-2a3.001 3.001 0 0 0-2.83 2H7.5l-.176.005A3 3 0 0 0 4.5 7v12l.005.176A3 3 0 0 0 7.5 22h10l.176-.005A3 3 0 0 0 20.5 19V7l-.005-.176A3 3 0 0 0 17.5 4h-1.17a3.001 3.001 0 0 0-2.83-2Zm2.83 4h1.17l.117.007A1 1 0 0 1 18.5 7v12l-.007.117A1 1 0 0 1 17.5 20h-10l-.117-.007A1 1 0 0 1 6.5 19V7l.007-.117A1 1 0 0 1 7.5 6h1.17a3.001 3.001 0 0 0 2.83 2h2a3.001 3.001 0 0 0 2.83-2ZM10.5 5a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1Zm4 8a1 1 0 0 1 .117 1.993L14.5 15h-1v1a1 1 0 0 1-1.993.117L11.5 16v-1h-1a1 1 0 0 1-.117-1.993L10.5 13h1v-1a1 1 0 0 1 1.993-.117L13.5 12v1h1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default RoomIcon;
