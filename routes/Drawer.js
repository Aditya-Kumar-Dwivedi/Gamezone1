import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawerNavigator = () => (
  <Navigator initialRouteName='Home'screenOptions={{headerShown: false}}>
    <Screen
      name='GameZone'
      component={HomeStack}
    />
    <Screen
      name='About GameZone'
      component={AboutStack}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;