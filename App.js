import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/HomeStack';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);


  if(fontsLoaded){
    return (
      <Navigator />
    )
  } else {
    return (
      <AppLoading
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true)} 
      onError={() => console.log('error')}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});