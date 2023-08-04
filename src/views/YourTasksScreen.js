import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Card from '../components/CardYT'
import tasksObj from '../components/tasks'
import FilterYT from '../components/FilterYT'
import { access } from '../commun'

import style from '../style'

export default class YourTasks extends Component {
  state = {
    tasks: []
  }

  conect = async () => {
    console.clear();
    const headers = {
      authorization: `Bearer ${this.props.route.params.access}`
    };
    const config = {
      method: 'GET',
      headers: headers,
    };

    const response = await fetch(
      'https://academy-task-hub.onrender.com/auth/api/user/',
      config
    );
    const persons = await fetch(
      'https://academy-task-hub.onrender.com/client/api/person/',
      config
    );

    const json = await response.json();
    const person = await persons.json()

    console.log('STATUS YT', response.status)
    this.setState({ tasks: person.results[2].item_list })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={styles.txtContainer} onReady={this.conect()}>
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
    color: '#343a40',
    fontFamily: style.fontBold
  },
})
