import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default class FilterComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: Dimensions.get('window').width / 3,
          height: 30,
          backgroundColor: this.props.color || '#d9d9d9',
          borderRadius: 10,
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
        <Text style={{ color: '#343a40' }}>
          {this.props.value}  {this.props.search ? <Ionicons name='search' size={15} color='#343a40' /> : false}
        </Text>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({})
