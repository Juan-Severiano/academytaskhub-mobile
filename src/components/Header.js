import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'

import icon from '../../assets/icon.png'

export default class Header extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={icon} style={styles.img} />
          <TouchableWithoutFeedback>
            <Ionicons name='notifications-outline' size={28} color='#000' />
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#bbb',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20
  },
  img: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
})
