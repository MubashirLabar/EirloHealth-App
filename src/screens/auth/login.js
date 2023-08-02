import { useState } from "react";
import { View, ScrollView } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { AppText, TextField, Touchable, AppButton } from "components";
import { AuthIcon } from "assets/icons";
import colors from "style/colors";
import routes from "navigation/routes";

function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <ScrollView className="flex-1">
      <View className="flex items-center justify-center bg-grey-100 py-1">
        <AuthIcon />
      </View>
      <View className="w-full py-8 px-4">
        <View className="items-center justify-center mb-8">
          <AppText className="font-SemiBold text-[24px] leading-[36px] text-black-700 mb-3">
            Sign In
          </AppText>
          <AppText className="text-[16px]">
            Please enter your credentials to proceed
          </AppText>
        </View>
        <View className="w-full gap-6 mb-12">
          <View className="w-full">
            <TextField placeholder="Enter Your Email" />
          </View>
          <View className="w-full">
            <TextField
              placeholder="Password"
              className="mb-2"
              secureTextEntry={showPassword}
              icon={
                <Touchable
                  className="absolute right-4 top-[15px]"
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <FeatherIcon
                    name={showPassword ? "eye-off" : "eye"}
                    size={20}
                    color={colors.grey[900]}
                  />
                </Touchable>
              }
            />
            <Touchable className="w-full items-end">
              <AppText className="text-[13px] text-primary-700 font-Medium">
                Forgot Password ?
              </AppText>
            </Touchable>
          </View>
        </View>
        <AppButton
          label="Sign In"
          className="mb-8"
          onPress={() => navigation.navigate(routes.MAIN_SCREEN)}
        />
        <View className="w-full flex-row items-center justify-center">
          <AppText className="text-[13px] font-Medium">
            Don’t have an Account?{" "}
          </AppText>
          <Touchable onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}>
            <AppText className="text-[13px] font-Medium text-primary-700">
              Sign Up
            </AppText>
          </Touchable>
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
