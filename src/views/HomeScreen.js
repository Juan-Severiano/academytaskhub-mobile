import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native'
import Card from '../components/Card'
import tasksObj from '../components/tasks'
import data from '../../data'
import style from '../style'
import { access } from '../commun'

export default class HomeScreen extends Component {
  state = {
    tasks: [...tasksObj],
    clients: [],
  }

  conect = async () => {
    console.clear();
    const headers = {
      authorization: access
    };
    const config = {
      method: 'GET',
      headers: headers,
    };

    const response = await fetch(
      'https://academy-task-hub.onrender.com/client/api/person',
      config
    );

    const json = await response.json();

    console.log('STATUS', response.status)
    this.setState({ clients: json.results[2].item_list })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} {...this.conect()} >
        <Text style={{ fontFamily: style.fontDefault, fontSize: 30, marginTop: 20}}>
          To do
        </Text>
        <FlatList
          data={this.state.clients}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => {
            if (item.status === 'TODO') {
              return <Card id={item.id} {...item} />
            }
            return
          }
          }
        />
        <Text style={{ fontFamily: style.fontDefault, fontSize: 30 }}>Doing</Text>
        <FlatList
          data={this.state.clients}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => {
            if (item.status === 'DOING') {
              return <Card id={item.id} {...item} />
            }
            return
          }
          }
        />
        <Text style={{ fontFamily: style.fontDefault, fontSize: 30 }}>Done</Text>
        <FlatList
          data={this.state.clients}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => {
            if (item.status === 'DONE') {
              return <Card id={item.id} {...item} />
            }
            return
          }
          }
        />
      </ScrollView>
    )
  }
}
