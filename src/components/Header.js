import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import icon from '../../assets/icon.png'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Image source={icon} style={styles.img} />
          <Text style={styles.title}>Academy Task Hub</Text>
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
  },
  img: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginLeft: 20,
    marginRight: 10,
  },
  title: {
    color: '#000',
    height: 30,
    fontSize: 28
  }
})
