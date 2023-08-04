import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/index'
import Header from './src/components/Header'
import AppLoading from 'expo-app-loading'
import { server, showError, showSuccess } from './src/commun'
import axios from 'axios'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
} from '@expo-google-fonts/poppins';

export default function App(props) {
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

  console.log("App", props.navigation.state.params)
  // routeParams={props.route.params}

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#d9d9d9' }}>
        <Header />
        <NavigationContainer >
          <Navigation natigation2={props.navigation} routeParams={props.navigation.state.params} />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}