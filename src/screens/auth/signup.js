import { useState } from "react";
import { View, ScrollView } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import {
  AppText,
  TextField,
  Touchable,
  AppButton,
  AppPickerWithSearch,
} from "components";
import { AuthIcon } from "assets/icons";
import colors from "style/colors";
import routes from "navigation/routes";

const roles = [
  {
    name: "Role 1",
    value: "role1",
  },
  {
    name: "Role 2",
    value: "role2",
  },
  {
    name: "Role 3",
    value: "role3",
  },
  {
    name: "Role 4",
    value: "role4",
  },
  {
    name: "Role 5",
    value: "role5",
  },
  {
    name: "Role 6",
    value: "role6",
  },
  {
    name: "Role 7",
    value: "role7",
  },
  {
    name: "Role 8",
    value: "role8",
  },
  {
    name: "Role 9",
    value: "role9",
  },
  {
    name: "Role 10",
    value: "role10",
  },
];

function SignUpScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(true);
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <ScrollView className="flex-1">
      <View className="flex items-center justify-center bg-grey-100 py-1">
        <AuthIcon />
      </View>
      <View className="w-full py-8 px-4">
        <View className="items-center justify-center mb-8">
          <AppText className="font-SemiBold text-[24px] leading-[36px] text-black-700 mb-3">
            Sign Up
          </AppText>
          <AppText className="text-[16px]">
            Please enter your details to proceed
          </AppText>
        </View>
        <View className="w-full gap-6 mb-8">
          <View className="w-full">
            <TextField placeholder="First Name" />
          </View>
          <View className="w-full">
            <TextField placeholder="Last Name" />
          </View>
          <View className="w-full">
            <TextField placeholder="Email" />
          </View>
          <View className="w-full">
            <TextField placeholder="Hospital Code" />
          </View>
          <View className="w-full">
            <AppPickerWithSearch
              loading={false}
              items={roles || []}
              placeholder="Select Your Role"
              searchPlaceHolder="Search role..."
              selectedItem={selectedRole}
              onSelectItem={(item) => setSelectedRole(item)}
            />
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
          </View>
        </View>
        <AppButton
          label="Sign Up"
          className="mb-8"
          onPress={() => navigation.navigate(routes.VERIFY_EMAIL_SCREEN)}
        />
        <View className="w-full flex-row items-center justify-center">
          <AppText className="font-Medium text-[13px]">
            Don’t have an Account?{" "}
          </AppText>
          <Touchable onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}>
            <AppText className="font-Medium text-[13px] text-primary-700">
              Sign In
            </AppText>
          </Touchable>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUpScreen;
