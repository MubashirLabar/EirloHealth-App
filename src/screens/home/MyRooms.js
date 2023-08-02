import { View } from "react-native";
import { AppText, Touchable } from "components";
import { ArrowRightIcon } from "assets/icons";
import RoomCardHorizontal from "components/RoomCardHorizontal";
import { myRoomsList } from "../../data";

export default function MyRooms() {
  return (
    <View className="flex-1 pb-8">
      <View className="flex-row items-center mb-4">
        <AppText className="flex-1 font-SemiBold text-[24px]">My Rooms</AppText>
        <Touchable>
          <ArrowRightIcon />
        </Touchable>
      </View>
      <View className="flex-1">
        {myRoomsList.map((item, index) => (
          <View key={index}>
            <RoomCardHorizontal data={item} />
            <View className="bg-transparent h-4 w-full" />
          </View>
        ))}
      </View>
    </View>
  );
}
