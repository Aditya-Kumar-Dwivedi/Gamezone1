import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const HomeStack = createStackNavigator();

export default function myStacks() {
  return (
    <HomeStack.Navigator initialRouteName="GameZone" screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="GameZone" component={Home} />
      <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
    </HomeStack.Navigator>
  );
}
