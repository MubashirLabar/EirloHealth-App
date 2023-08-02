import { ScrollView, StatusBar, View, TextInput } from "react-native";
import { useState } from "react";
import { styles } from "style";
import colors from "style/colors";
import {
  ArrowLeftIcon,
  MedicalCaseIcon,
  ThermometerIcon,
  BeakerIcon,
  SearchIcon,
} from "assets/icons";
import { AppText, Touchable } from "components";
import Item from "./Item";

const options = [
  {
    label: "Supplies",
    icon: "medical-case",
  },
  {
    label: "Equipment",
    icon: "thermometer",
  },
  {
    label: "Labs",
    icon: "beaker",
  },
];

export default function AddTaskItemScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  const Options = () => {
    return (
      <View className="flex flex-row gap-x-2 mb-6">
        {options.map((item, index) => (
          <Touchable
            key={index}
            className={`flex-1 items-center justify-center p-4 rounded-lg ${
              selectedOption === item.label ? "bg-primary-700" : "bg-grey-200"
            }`}
            onPress={() => setSelectedOption(item.label)}
          >
            {item.icon === "medical-case" && (
              <MedicalCaseIcon
                color={
                  selectedOption === item.label
                    ? colors.white
                    : colors.primary[700]
                }
              />
            )}
            {item.icon === "thermometer" && (
              <ThermometerIcon
                color={
                  selectedOption === item.label
                    ? colors.white
                    : colors.primary[700]
                }
              />
            )}
            {item.icon === "beaker" && (
              <BeakerIcon
                color={
                  selectedOption === item.label
                    ? colors.white
                    : colors.primary[700]
                }
              />
            )}
            <AppText
              className={`mt-1 ${
                selectedOption === item.label
                  ? "text-white"
                  : "text-primary-700"
              }`}
            >
              {item.label}
            </AppText>
          </Touchable>
        ))}
      </View>
    );
  };

  return (
    <View
      className="flex-1 px-4"
      style={{ paddingTop: styles.statusBarHeight }}
    >
      <StatusBar backgroundColor={"#fff"} translucent barStyle="dark-content" />
      <View className="flex-row items-center py-5">
        <Touchable onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color={colors.black[700]} />
        </Touchable>

        <AppText className="font-SemiBold text-[24px] leading-[36px] ml-4">
          Add Items
        </AppText>
      </View>
      <AppText className="font-SemiBold text-[16px] mb-4">Items</AppText>
      <Options />
      <View className="flex-row items-center bg-grey-200 px-4 py-2.5 rounded-lg">
        <SearchIcon color={colors.grey[800]} />
        <TextInput
          className="w-full h-full px-3 bg-grey-200 rounded-lg font-Medium text-[14px] text-black-700"
          underlineColorAndroid="transparent"
          placeholderTextColor={colors.grey[800]}
          placeholder="Search"
          includeFontPadding={false}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <ScrollView
        className="flex-1 px-4 pt-6 flex-col pb-5"
        showsVerticalScrollIndicator={false}
      >
        {[...Array(3)].map((_, index) => (
          <Item key={index} number={index} />
        ))}
      </ScrollView>
    </View>
  );
}
