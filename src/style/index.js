import { Platform, StatusBar } from "react-native";
import colors from "./colors";

export const styles = {
  statusBarHeight: Platform.OS === "ios" ? 40 : StatusBar.currentHeight,
  buttonPrimaryShadow: {
    shadowColor: colors.primary[700],
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 10,
  },
  buttonSecondaryShadow: {
    shadowColor: colors.black[700],
    shadowOpacity: 0.25,
    shadowRadius: 25,
    elevation: 10,
  },
  roomDetailCardShadow: {
    shadowColor: "rgba(48, 49, 51, 0.5)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },
  addTaskButtonShadow: {
    shadowColor: "rgba(48, 49, 51, 0.5)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 8,
  },
};
