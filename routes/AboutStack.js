import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";

const AboutStack = createStackNavigator();

export default function myStacks() {
  return (
    <AboutStack.Navigator initialRouteName="GameZone" screenOptions={{ headerShown: false }}>
      <AboutStack.Screen
        name="About GameZone"
        component={About}
      />
    </AboutStack.Navigator>
  );
}