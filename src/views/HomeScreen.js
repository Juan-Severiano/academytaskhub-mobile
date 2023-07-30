import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import Card from '../components/Card'
import tasksObj from '../components/tasks'

export default class HomeScreen extends Component {
  state = {
    tasks: [...tasksObj]
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <FlatList
          data={this.state.tasks}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => 
            <Card id={item.id} {...item} />
          }
        />
      </View>
    )
  }
}
