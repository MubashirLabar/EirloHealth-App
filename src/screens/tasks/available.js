import { View } from "react-native";
import { TaskCard } from "components";

export default function Available() {
  return (
    <View className="flex-1 pb-5">
      {[...Array(1)].map((_, index) => (
        <TaskCard key={index} status="available" style="mb-4" />
      ))}
    </View>
  );
}
