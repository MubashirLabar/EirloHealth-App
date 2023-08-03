import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "./routes";
import colors from "style/colors";
import { HomeIcon, RoomIcon, TaskIcon } from "assets/icons";
import HomeScreen from "screens/home";
import TasksScreen from "screens/tasks";
import RoomsScreen from "screens/rooms";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={routes.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.primary[500],
        tabBarStyle: {
          height: Platform.OS === "ios" ? 94 : 64,
          backgroundColor: colors.primary[700],
          paddingVertical: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 15,
          fontFamily: "PoppinsRegular",
          padding: 0,
          margin: 0,
          marginBottom: 6,
        },
      }}
    >
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ROOMS_SCREEN}
        component={RoomsScreen}
        options={{
          tabBarLabel: "Rooms",
          tabBarIcon: ({ color, size }) => (
            <RoomIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.TASKS_SCREEN}
        component={TasksScreen}
        options={{
          tabBarLabel: "Tasks",
          tabBarIcon: ({ color, size }) => (
            <TaskIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
