import { View, ScrollView } from "react-native";
import { AppText } from "components";
import { AuthIcon } from "assets/icons";

function VerifyEmailScreen() {
  return (
    <ScrollView className="flex-1">
      <View className="flex items-center justify-center bg-grey-100 py-1">
        <AuthIcon />
      </View>
      <View className="w-full py-8 px-4">
        <View className="items-center justify-center mb-8">
          <AppText className="font-SemiBold text-[24px] leading-[36px] text-black-700 mb-3">
            Verify Email
          </AppText>
          <AppText className="text-[16px]">
            You will receive an email with instructions
          </AppText>
        </View>
      </View>
    </ScrollView>
  );
}

export default VerifyEmailScreen;
