import { View, Text, Image } from "react-native";
import colors from "style/colors";
import AppTag from "./AppTag";

export default function RoomCardHorizontal({ data, className }) {
  return (
    <View className={`bg-white p-3 rounded-lg flex-row ${className}`}>
      <Image
        source={data.image}
        className="h-20 w-20 rounded-lg mr-4"
        style={{ resizeMode: "cover", backgroundColor: colors.grey[200] }}
      />
      <View className="flex-1 flex justify-between">
        <View className="flex-1 flex-row">
          <View className="flex-1">
            <Text
              className="font-SemiBold text-black-700 text-[16px]"
              numberOfLines={1}
            >
              {data.name}
            </Text>
            <Text className="font-Regular text-grey-900 text-[12px]">
              {data.floor}
            </Text>
          </View>
          <AppTag status={data.status} />
        </View>
        <View className="flex-row items-center">
          <Text className="font-Regular text-grey-900 text-[12px]">
            Status -{" "}
          </Text>
          <Text className="font-SemiBold text-black-700 text-[12px]">
            {data.status}
          </Text>
        </View>
      </View>
    </View>
  );
}
