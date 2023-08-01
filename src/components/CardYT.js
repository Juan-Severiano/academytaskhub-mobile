import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Button, Linking, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../style'

const user = {
  id: 30
}
const card = {
  id: 11
}

export default props => (
    <View style={style.card}>
      <View style={style.cardHeader}>
        <Text style={style.cardText}>{ props.title }</Text>
      <Icon name='circle' size={25} color={props.color || props.type === 'A' ? '#FFDE59' : '#3facac' } />
      </View>
      <Text style={style.cardDescription}>
        { props.content }
      </Text>
      <View style={style.cardInfo}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name='book-outline' color='#000' size={20} />
          <Text style={(style.cardDescription, style.cardInfoText)}>{ props.discipline.name }</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name='person-outline' color='#000' size={20} />
          <Text style={(style.cardDescription, style.cardInfoText)}>{ props.teacher.name }</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name='calendar-outline' color='#000' size={20} />
        <Text style={(style.cardDescription, style.cardInfoText)}>{ props.due_date }</Text>
      </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10 }}>
      <TouchableOpacity style={style.button} onPress={() => Linking.openURL(`https://academy-task-hub.onrender.com/client/update_card/${3}/${props.id}/`)}>
          <Text style={style.btnTxt}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.buttonDelete}>
        <Text style={style.btnTxtDel}>Apagar</Text>
      </TouchableOpacity>
    </View>
    </View>
)

const style = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 20,
    width: Dimensions.get('window').width / 1.2,
    minHeight: 50,
    backgroundColor: '#fff',
    padding: 20
  },
  cardText: {
    fontSize: 30,
    color: '#000',
    fontFamily: styles.fontDefault
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 15,
    marginBottom: 5,
    color: '#000',
    margin: 0,
    fontFamily: styles.fontMedium
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
    color: '#000',
    paddingLeft: 5,
    fontFamily: styles.fontMedium
  },
  button: {
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#0dcaf0',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  btnTxt: {
    fontFamily: styles.fontDefault,
    color: '#0dcaf0'
  },
  buttonDelete: {
    borderRadius: 5,
    backgroundColor: '#dc3545',
    paddingHorizontal: 13,
    paddingVertical: 8
  },
  btnTxtDel: {
    fontFamily: styles.fontDefault,
    color: '#fff'
  }
})