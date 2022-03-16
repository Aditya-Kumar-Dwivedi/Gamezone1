import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header'; 

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({navigation}) => (
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
      name="Home" 
      component={Home} 
      options={{
        headerStyle:{
        height: 100
      },  
        headerTitle: () => <Header navigation={navigation} />,
      }} 
    />
    <Screen
      name='ReviewDetails'
      component={ReviewDetails}
      options={{ 
        headerTitle: 'Review Details' 
      }}
    />
  </Navigator>
);

export default HomeStack;