import { ScrollView, StatusBar, View } from "react-native";
import { useState } from "react";
import { AppText, AppPickerWithSearch, Touchable, AppButton } from "components";
import routes from "navigation/routes";
import { styles } from "style";
import colors from "style/colors";
import { ArrowLeftIcon, PlusIcon2 } from "assets/icons";

const rooms = [
  {
    name: "All Rooms",
    value: "all-rooms",
  },
  {
    name: "Room 1",
    value: "room-1",
  },
  {
    name: "Room 2",
    value: "room-2",
  },
  {
    name: "Room 3",
    value: "room-3",
  },
  {
    name: "Room 4",
    value: "room-4",
  },
  {
    name: "Room 5",
    value: "room-5",
  },
  {
    name: "Room 6",
    value: "room-6",
  },
  {
    name: "Room 7",
    value: "room-7",
  },
  {
    name: "Room 8",
    value: "room-8",
  },
  {
    name: "Room 9",
    value: "room-9",
  },
  {
    name: "Room 10",
    value: "room-10",
  },
];

export default function CreateTaskScreen({ navigation }) {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  return (
    <View className="flex-1" style={{ paddingTop: styles.statusBarHeight }}>
      <StatusBar backgroundColor={"#fff"} translucent barStyle="dark-content" />
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center py-5">
          <Touchable onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size={24} color={colors.black[700]} />
          </Touchable>

          <AppText className="font-SemiBold text-[24px] leading-[36px] ml-4">
            Create Task
          </AppText>
        </View>
        <View className="mb-6">
          <AppText className="mb-1">Room</AppText>
          <AppPickerWithSearch
            loading={false}
            items={rooms || []}
            placeholder="Select Rooms"
            searchPlaceHolder="Search rooms..."
            selectedItem={selectedRoom}
            onSelectItem={(item) => setSelectedRoom(item)}
          />
        </View>
        <Touchable
          className="h-[40px] bg-transparent border-solid border-[1px] border-green-700 rounded-lg flex-row items-center justify-center"
          onPress={() => navigation.navigate(routes.ADD_TASK_ITEM)}
        >
          <PlusIcon2 size={16} color={colors.green[700]} />
          <AppText className="font-Medium text-green-700 leading-5 ml-1.5">
            Add Item
          </AppText>
        </Touchable>
      </ScrollView>
      <View className="px-4 mb-6">
        <AppButton label="Create Task" />
      </View>
    </View>
  );
}
