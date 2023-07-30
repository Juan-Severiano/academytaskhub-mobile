import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import Card from '../components/Card'

export default class HomeScreen extends Component {
  state = {
    tasks: [{
      id: 1,
      title: 'asd',
      description: 'what the hell is going on?',
      teacher: 'life',
      discipline: 'como quebrar a cara',
      due_date: '23 de nunca de 2050',
    },
    {
      id: 2,
      title: 'asd',
      description: 'what the hell is going on?',
      teacher: 'life',
      discipline: 'como quebrar a cara',
      due_date: '23 de nunca de 2050',
    },
    {
      id: 3,
      title: 'asd',
      description: 'what the hell is going on?',
      teacher: 'life',
      discipline: 'como quebrar a cara',
      due_date: '23 de nunca de 2050',
    },
    {
      id: 4,
      title: 'asd',
      description: 'what the hell is going on?',
      teacher: 'life',
      discipline: 'como quebrar a cara',
      due_date: '23 de nunca de 2050',
    },
    {
      id: 5,
      title: 'asd',
      description: 'what the hell is going on?',
      teacher: 'life',
      discipline: 'como quebrar a cara',
      due_date: '23 de nunca de 2050',
    },
    {
      id: 6,
      title: 'asd',
      description: 'what the hell is going on?',
      teacher: 'life',
      discipline: 'como quebrar a cara',
      due_date: '23 de nunca de 2050',
    }]
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
