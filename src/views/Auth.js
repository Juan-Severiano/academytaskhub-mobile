import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppLoading from 'expo-app-loading';
import Login from './Login';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
} from '@expo-google-fonts/poppins';

export default function Auth(props) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#d9d9d9' }}>
        <Login navigation={props.navigation} />
      </SafeAreaView>
    );
  }
}