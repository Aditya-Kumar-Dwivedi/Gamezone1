import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => (
  <Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTintColor: '#444',
      height: 60
    }}
  >
    <Screen
      name='Home'
      component={Home}
      options={{ title: 'GameZone' }}
    />
    <Screen
      name='ReviewDetails'
      component={ReviewDetails}
      options={{ title: 'Review Details' }}
    />
  </Navigator>
);

export default HomeStack;