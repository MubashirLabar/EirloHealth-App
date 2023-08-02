import { View } from "react-native";
import { TaskCard } from "components";

export default function Progress() {
  return (
    <View className="flex-1 pb-5">
      {[...Array(5)].map((_, index) => (
        <TaskCard key={index} status="in-progress" style="mb-4" />
      ))}
    </View>
  );
}
