import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import style from '../style'

export default class FilterYT extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: Dimensions.get('window').width / 4,
          height: 30,
          backgroundColor: this.props.color || '#d9d9d9',
          borderRadius: 20,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 5
        }}
        onPress={() => {
          if (this.props.add) {
            this.props.add(this.props.value)
          }
        }}>
        <Text style={{ color: '#343a40', fontFamily: style.fontMedium }}>
          {this.props.value}  {this.props.search ? <Ionicons name='search' size={15} color='#343a40' /> : false}
        </Text>

      </TouchableOpacity>
    )
  }
}


