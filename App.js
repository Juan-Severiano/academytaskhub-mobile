import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/index'
import Header from './src/components/Header'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}