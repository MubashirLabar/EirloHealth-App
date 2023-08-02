import { Text } from "react-native";

function AppText({ children, className, ...rest }) {
  return (
    <Text
      className={`font-Regular text-black-700 text-[14px] ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default AppText;
