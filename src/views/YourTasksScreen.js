import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Card from '../components/CardYT'
import tasksObj from '../components/tasks'
import FilterYT from '../components/FilterYT'

export default class YourTasks extends Component {
  state = {
    tasks: [...tasksObj]
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>Suas Tarefas</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <FilterYT value='to do' />
          <FilterYT value='doing' />
          <FilterYT value='done' />
        </View>
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

const styles = StyleSheet.create({
  txtContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  txt: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#343a40'
  },
})
