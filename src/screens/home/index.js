import { ScrollView, StatusBar, View, Text } from "react-native";
import { Header } from "components";
import { styles } from "style";
import colors from "style/colors";
import MyTasks from "./MyTasks";
import MyRooms from "./MyRooms";

function HomeScreen() {
  return (
    <View
      className="flex-1 bg-primary-700"
      style={{ paddingTop: styles.statusBarHeight }}
    >
      <StatusBar
        backgroundColor={colors.primary[700]}
        translucent
        barStyle="white-content"
      />
      <Header label="Home" />
      <ScrollView
        className="flex-1 px-4 py-6 bg-grey-200"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <MyTasks />
        <MyRooms />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
