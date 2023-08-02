import { View, StatusBar, ScrollView } from "react-native";
import { styles } from "style";
import colors from "style/colors";
import { AppText, Touchable } from "components";
import { ArrowLeftIcon } from "assets/icons";
import PeopleCard from "components/PeopleCard";

const peopleList = [
  {
    name: "Ally Jones",
    designation: "Nurse",
  },
  {
    name: "Mike Adams",
    designation: "Nurse",
  },
  {
    name: "Kalib Riddle",
    designation: "PCA",
  },
];

export default function PeopleScreen({ navigation }) {
  return (
    <View
      className="flex-1 bg-grey-200"
      style={{ paddingTop: styles.statusBarHeight }}
    >
      <StatusBar
        backgroundColor={colors.grey[200]}
        translucent
        barStyle="dark-content"
      />
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center py-5">
          <Touchable onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size={24} color={colors.black[700]} />
          </Touchable>

          <AppText className="font-SemiBold text-[24px] leading-[36px] ml-4">
            People
          </AppText>
        </View>
        {peopleList.map((item, index) => (
          <PeopleCard data={item} key={index} style="mb-4" />
        ))}
      </ScrollView>
    </View>
  );
}
