import { View, Text, StatusBar, ScrollView } from "react-native";
import { useState } from "react";
import colors from "style/colors";
import { styles } from "style";
import { Header, AppPickerWithSearch, Touchable } from "components";
import Available from "./available";
import Progress from "./progress";
import Complete from "./complete";
import { PlusIcon2 } from "assets/icons";
import routes from "navigation/routes";

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

const tabs = [
  {
    label: "Available",
    value: "available",
  },
  {
    label: "In Progress",
    value: "in-progress",
  },
  {
    label: "Complete",
    value: "complete",
  },
];

function TasksScreen({ navigation }) {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  return (
    <View
      className="flex-1 bg-primary-700 relative"
      style={{ paddingTop: styles.statusBarHeight }}
    >
      <StatusBar
        backgroundColor={colors.primary[700]}
        translucent
        barStyle="white-content"
      />
      <Header label="My Tasks" />

      <ScrollView className="flex-1 px-4 bg-grey-200">
        <View className="py-8">
          <View className="h-[48px]">
            <AppPickerWithSearch
              loading={false}
              items={rooms || []}
              placeholder="Select Rooms"
              searchPlaceHolder="Search rooms..."
              style="!bg-white"
              selectedItem={selectedRoom}
              onSelectItem={(item) => setSelectedRoom(item)}
            />
          </View>
        </View>

        {/* Tabs */}
        <View className="flex flex-row mb-5">
          {tabs.map((tab, index) => (
            <Touchable
              key={index}
              className={`flex-1 pb-3 border-solid border-b-[1px] ${
                activeTab === tab.value
                  ? "border-primary-700 border-b-[2px]"
                  : "border-grey-900"
              }`}
              onPress={() => setActiveTab(tab.value)}
            >
              <Text
                className={`font-Medium text-[14px] leading-[24px] text-center ${
                  activeTab === tab.value ? "text-primary-700" : "text-grey-900"
                }`}
              >
                {tab.label}
              </Text>
            </Touchable>
          ))}
        </View>

        {activeTab === "available" ? (
          <Available />
        ) : activeTab === "in-progress" ? (
          <Progress />
        ) : activeTab === "complete" ? (
          <Complete />
        ) : null}
      </ScrollView>
      <View className="absolute bottom-6 right-4">
        <Touchable
          className=" h-12 w-12 flex items-center justify-center rounded-full bg-primary-700"
          style={styles.addTaskButtonShadow}
          onPress={() => navigation.navigate(routes.CREATE_TASK_SCREEN)}
        >
          <PlusIcon2 color="#fff" />
        </Touchable>
      </View>
    </View>
  );
}

export default TasksScreen;
