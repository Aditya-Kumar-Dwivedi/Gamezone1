import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = () => (
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
      name='About'
      component={About}
      options={{ title: 'About GameZone' }}
    />
  </Navigator>
);

export default AboutStack;