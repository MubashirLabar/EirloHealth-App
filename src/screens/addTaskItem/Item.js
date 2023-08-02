import { View, TextInput } from "react-native";
import { useState } from "react";
import Modal from "react-native-modal";
import { PlusIcon2, MinusIcon } from "assets/icons";
import { AppText, Touchable, AppButton } from "components";
import { styles } from "style";
import colors from "style/colors";

export default function Item({ number }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddButton = () => {
    let value = parseInt(quantity) + 1;
    setQuantity(JSON.stringify(value));
  };

  const handleMinusButton = () => {
    let value = parseInt(quantity) - 1;
    setQuantity(JSON.stringify(value));
  };

  return (
    <>
      <View className="flex-row items-center pb-4 border-solid border-b-[1px] border-grey-800 mb-4">
        <AppText className="flex-1">{`Item ${number + 1}`}</AppText>
        <Touchable
          className="bg-green-700 h-8 w-8 rounded-full flex items-center justify-center"
          onPress={() => setModalVisible(true)}
        >
          <PlusIcon2 size={16} color={"#fff"} />
        </Touchable>
      </View>

      {/* Add Item */}
      <Modal isVisible={isModalVisible}>
        <View className="bg-white w-full p-4 rounded-lg flex">
          <AppText className="font-SemiBold text-[16px] text-center mb-6">
            Item 1
          </AppText>
          <View className="flex-row items-center justify-center mb-6">
            <Touchable
              className="h-8 w-8 rounded-md items-center justify-center bg-grey-200"
              disabled={quantity <= 0}
              onPress={handleMinusButton}
            >
              <MinusIcon size={18} color={colors.grey[900]} />
            </Touchable>
            <TextInput
              underlineColorAndroid="transparent"
              placeholderTextColor={colors.grey[900]}
              placeholder="0"
              keyboardType="numeric"
              className="w-20 text-[16px] text-black-700 text-center"
              value={quantity}
              onChangeText={(value) => setQuantity(value)}
            />
            <Touchable
              className="h-8 w-8 rounded-md items-center justify-center bg-grey-200"
              onPress={handleAddButton}
            >
              <PlusIcon2 size={18} color={colors.grey[900]} />
            </Touchable>
          </View>
          <View className="flex-row items-center justify-center gap-x-3">
            <AppButton
              type="hole"
              className="w-[90px] h-[40px] border-grey-900"
              label="Cancel"
              labelStyle="leading-[19px] text-grey-900"
              onPress={toggleModal}
            />
            <AppButton
              type="hole"
              className="w-[90px] h-[40px] border-green-700"
              label="Add"
              labelStyle="leading-[19px] text-green-700"
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
