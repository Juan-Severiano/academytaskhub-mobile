import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import Ionicons from '@expo/vector-icons/Ionicons'

export default props => (
  <View style={style.card}>
    <View>
      <Text style={style.cardText}>Titulo da tarefa</Text>
      <Icon name='add' size={25} color='#fff' />
    </View>
  </View>
)

const style = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
    width: Dimensions.get('window').width / 1.2,
    minHeight: 200,
    backgroundColor: '#000',
    padding: 20
  },
  cardText: {
    fontSize: 30,
    color: '#fff'
  }
})