import { View, Text } from "react-native";
import AppButton from "./AppButton";
import AppTag from "./AppTag";

export default function TaskCard({ status = null, style }) {
  return (
    <View className={`bg-white p-3 rounded-lg ${style}`}>
      <View className="flex-row items-center mb-3">
        <View className="flex-row items-center flex-1">
          <Text className="font-SemiBold text-black-700 text-[16px]">
            Room 3 -{" "}
          </Text>
          <Text className="font-Regular text-black-700 text-[14px]">
            Task 2
          </Text>
        </View>
        <AppTag status={status} />
      </View>
      <View className="flex-row items-center mb-2">
        <Text className="font-Medium text-black-700 text-[14px] mr-2">
          Gauze:
        </Text>
        <Text className="font-Medium text-black-700 text-[14px]">5</Text>
      </View>
      {status === "complete" && (
        <Text className="flex-1 font-Regular text-[12px] text-grey-900 mb-2">
          Created At : 09 : 12 AM
        </Text>
      )}
      <View className="flex-row items-center mb-2">
        <Text className="flex-1 font-Regular text-[12px] text-grey-900">
          Created At : 09 : 12 AM
        </Text>
        {status === "in-progress" ||
          (status === "complete" && (
            <Text className="font-Regular text-[12px] text-black-700">
              Zach Adler
            </Text>
          ))}
      </View>

      {status === "available" && (
        <View className="flex gap-y-2">
          <AppButton
            label="Accept"
            type="hole"
            className="h-[40px] border-green-700"
            labelStyle="text-[14px] leading-[19px] text-green-700"
            onPress={() => console.log("Pressed Accept Button!")}
          />
        </View>
      )}

      {status === "in-progress" && (
        <View className="flex gap-y-2">
          <AppButton
            label="Complete"
            type="hole"
            className="h-[40px] border-green-700"
            labelStyle="text-[14px] leading-[19px] text-green-700"
            onPress={() => console.log("Pressed Complete Button!")}
          />
          <AppButton
            label="Leave"
            type="hole"
            className="h-[40px] border-red-700"
            labelStyle="text-[14px] leading-[19px] text-red-700"
            onPress={() => console.log("Pressed Leave Button!")}
          />
        </View>
      )}
    </View>
  );
}
