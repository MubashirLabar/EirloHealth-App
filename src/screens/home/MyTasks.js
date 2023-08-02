import { View } from "react-native";
import { AppText, Touchable, AppTag } from "components";
import { ArrowRightIcon } from "assets/icons";

export default function MyTasks() {
  return (
    <View className="mb-12">
      <View className="flex-row items-center mb-4">
        <AppText className="flex-1 font-SemiBold text-[24px]">My Tasks</AppText>
        <Touchable>
          <ArrowRightIcon />
        </Touchable>
      </View>
      <View className="flex-1 flex-row justify-between gap-x-3">
        <Touchable className="flex-1 bg-white p-3 rounded-lg">
          <AppTag status="Available" />
          <AppText className="font-SemiBold mb-1">Available</AppText>
          <AppText className="text-grey-900">2 Tasks</AppText>
        </Touchable>
        <Touchable className="flex-1 bg-white p-3 rounded-lg">
          <AppTag status="In Progress" />
          <AppText className="font-SemiBold mb-1">In Progress</AppText>
          <AppText className="text-grey-900">4 Tasks</AppText>
        </Touchable>
        <Touchable className="flex-1 bg-white p-3 rounded-lg">
          <AppTag status="Completed" />
          <AppText className="font-SemiBold mb-1">Completed</AppText>
          <AppText className="text-grey-900">10 Tasks</AppText>
        </Touchable>
      </View>
    </View>
  );
}
