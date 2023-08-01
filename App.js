import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/index'
import Header from './src/components/Header'
import AppLoading from 'expo-app-loading';
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

  connect = async () => {
    console.clear();
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({
      "username": "admin",
      "password": "admin"
    });
    const config = {
      method: 'POST',
      headers: headers,
      body: body
    }
    const response = await fetch(
      'https://academy-task-hub.onrender.com/auth/api/token/refresh',
      config
    );

    const json = await response.json();

    console.log('STATUS', response.status);
    console.log(json);
  }

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#d9d9d9' }}>
        <Header onReady={connect()} />
        <NavigationContainer >
          <Navigation natigation2={props.navigation} />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}