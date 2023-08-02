import { View, Text } from "react-native";

export default function Header({ label = "Label" }) {
  return (
    <View className="h-[70px] bg-primary-700 justify-center px-4">
      <Text className="font-SemiBold text-[24px] leading-[36px] text-white">
        {label}
      </Text>
    </View>
  );
}
