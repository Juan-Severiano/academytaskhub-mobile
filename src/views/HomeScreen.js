import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '../components/Card'

export default props => (
  <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </SafeAreaView>
)

const style = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 20,
    width: Dimensions.get('window').width / 1.2,
    minHeight: 50,
    backgroundColor: '#000',
    padding: 20
  },
  cardText: {
    fontSize: 30,
    color: '#fff'
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 15,
    color: '#fff',
    margin: 5,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardInfoText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    paddingLeft: 5,
  }
})