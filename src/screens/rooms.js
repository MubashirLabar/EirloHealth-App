import React from "react";
import { View, FlatList, StatusBar } from "react-native";
import { Header, RoomCardVertical } from "components";
import colors from "style/colors";
import { styles } from "style";
import { roomsList } from "../data";

const GridScreen = () => {
  const renderItem = ({ item, index }) => (
    <RoomCardVertical key={index} data={item} className="m-2" />
  );

  return (
    <View className="flex-1" style={{ paddingTop: styles.statusBarHeight }}>
      <StatusBar
        backgroundColor={colors.primary[700]}
        translucent
        barStyle="white-content"
      />
      <Header label="Rooms" />
      <View className="flex-1 bg-grey-200 px-2">
        <FlatList
          data={roomsList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 20,
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default GridScreen;
