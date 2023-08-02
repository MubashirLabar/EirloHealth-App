import { useEffect, useState } from "react";
import { View, Image, StatusBar } from "react-native";
import colors from "../style/colors";
import { styles } from "style";
import { Touchable, AppText, AppButton } from "components";
import { ArrowLeftIcon, StackIcon, UsersIcon, EditIcon } from "assets/icons";
import { roomsList } from "../data";
import routes from "navigation/routes";

export default function RoomDetailScreen({ navigation, route }) {
  const { id } = route.params;
  const [roomDetail, setRoomDetail] = useState(null);
  const [isAssigned, setIsAssigned] = useState(false);

  useEffect(() => {
    if (id) {
      let selectedRoom = roomsList.find((x) => x.id === id);
      setRoomDetail(selectedRoom);
    }
  }, [route]);

  return (
    <View className="flex-1">
      <StatusBar
        backgroundColor={"transparent"}
        translucent
        barStyle="white-content"
      />
      <View className="relative flex">
        <Touchable
          className="absolute top-12 left-5 z-10 h-8 w-8 rounded-full bg-primary-200 items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon color={colors.primary[700]} />
        </Touchable>
        <Image
          source={roomDetail?.image}
          className="w-full h-[260px] bg-grey-200 z-0"
          style={{ resizeMode: "cover" }}
        />
      </View>
      <View className="px-4">
        <View
          className="py-4 px-3 rounded-lg bg-white -mt-8 mb-5"
          style={styles.roomDetailCardShadow}
        >
          <View className="flex-row">
            <View className="flex-1">
              <AppText className="font-SemiBold text-[16px]">
                {roomDetail?.name}
              </AppText>
              <AppText className="font-Medium text-[12px] text-grey-900 mb-3">
                {roomDetail?.floor}
              </AppText>
            </View>
            {isAssigned && (
              <Touchable className="bg-green-700 h-8 w-8 rounded-full items-center justify-center">
                <EditIcon />
              </Touchable>
            )}
          </View>

          <View className="flex-row items-center mb-6">
            <AppText className="font-Medium text-[12px]">Status - </AppText>
            <AppText className="font-SemiBold text-[12px]">
              {roomDetail?.status}
            </AppText>
          </View>
          <AppButton
            label={isAssigned ? "Leave Room" : "Assign To Room"}
            className={isAssigned ? "bg-grey-900 border-grey-900" : ""}
            onPress={() => setIsAssigned(!isAssigned)}
          />
        </View>
        {isAssigned ? (
          <View className="flex flex-row gap-x-4">
            <View className="flex-1 bg-grey-200 p-3 rounded-lg">
              <View className="bg-primary-200 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <StackIcon color={colors.primary[700]} />
              </View>
              <AppText className="font-SemiBold text-[16px]">Tasks</AppText>
              <AppText className="font-Regular text-[14px] text-grey-900">
                12 Tasks
              </AppText>
            </View>
            <Touchable
              className="flex-1 bg-grey-200 p-3 rounded-lg"
              onPress={() => navigation.navigate(routes.PEOPLE)}
            >
              <View className="bg-primary-200 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                <UsersIcon color={colors.primary[700]} />
              </View>
              <AppText className="font-SemiBold text-[16px]">People</AppText>
              <AppText className="font-Regular text-[14px] text-grey-900">
                6 People
              </AppText>
            </Touchable>
          </View>
        ) : null}
      </View>
    </View>
  );
}
