import { View } from "react-native";
import { TaskCard } from "components";

export default function Complete() {
  return (
    <View className="flex-1 pb-5">
      {[...Array(1)].map((_, index) => (
        <TaskCard key={index} status="complete" style="mb-4" />
      ))}
    </View>
  );
}
