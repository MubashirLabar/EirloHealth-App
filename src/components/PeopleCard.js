import { View } from "react-native";
import { UsersIcon } from "assets/icons";
import colors from "style/colors";
import { AppText } from "components";

export default function PeopleCard({ data, style }) {
  return (
    <View className={`bg-white p-3 flex-row items-center rounded-lg ${style}`}>
      <View className="h-8 w-8 bg-grey-200 rounded-full mr-4 items-center justify-center">
        <UsersIcon size={16} color={colors.grey[900]} />
      </View>
      <View className="">
        <AppText>{data.name}</AppText>
        <AppText className="text-grey-900">{data.designation}</AppText>
      </View>
    </View>
  );
}
