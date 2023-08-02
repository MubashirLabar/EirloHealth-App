import { View } from "react-native";
import { ClipboardIcon, ProgressIcon, CheckIcon, PlusIcon } from "assets/icons";
import colors from "style/colors";

function AppTag({ status = "Available", className = "mb-4" }) {
  const _status = status ? status.toLowerCase() : "";
  const selectedColor =
    _status === "Available"
      ? "blue"
      : _status === "in progress" ||
        _status === "in-progress" ||
        _status === "not joined"
      ? "yellow"
      : _status === "completed" || _status === "complete"
      ? "green"
      : _status === "in surgery"
      ? "red"
      : "blue";

  const selectedIcon =
    _status === "available" ? (
      <ClipboardIcon size={12} color={colors[selectedColor][700]} />
    ) : _status === "in progress" ||
      _status === "in-progress" ||
      _status === "not joined" ? (
      <ProgressIcon size={12} color={colors[selectedColor][700]} />
    ) : _status === "completed" || _status === "complete" ? (
      <CheckIcon size={12} color={colors[selectedColor][700]} />
    ) : _status === "in surgery" ? (
      <PlusIcon size={12} color={colors[selectedColor][700]} />
    ) : (
      <ClipboardIcon size={12} color={colors[selectedColor][700]} />
    );

  return (
    <View
      className={`h-6 w-6 rounded-full flex items-center justify-center ${className}`}
      style={{
        backgroundColor: colors[selectedColor][200],
      }}
    >
      {selectedIcon}
    </View>
  );
}

export default AppTag;
