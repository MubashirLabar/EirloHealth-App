import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import navigationTheme from "./navigationTheme";
import routes from "./routes";
import AuthNavigator from "./AuthNavigator";
import TabNavigation from "./TabNavigation";
import CreateTaskScreen from "screens/createTask";
import AddTaskItemScreen from "screens/addTaskItem";
import RoomDetailScreen from "screens/roomDetail";
import PeopleScreen from "screens/people";

const RootStack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <RootStack.Navigator>
        <RootStack.Screen
          name={routes.AUTH}
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={routes.MAIN_SCREEN}
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={routes.ROOM_DETAIL_SCREEN}
          component={RoomDetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={routes.PEOPLE}
          component={PeopleScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={routes.CREATE_TASK_SCREEN}
          component={CreateTaskScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={routes.ADD_TASK_ITEM}
          component={AddTaskItemScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
