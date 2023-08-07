import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native'
import Card from '../components/Card'
import tasksObj from '../components/tasks'
import data from '../../data'
import style from '../style'
import { access } from '../commun'
import axios from 'axios'

export default class HomeScreen extends Component {
  state = {
    tasks: [...tasksObj],
    clients: [],
  }

  conect = async () => {
    console.clear();

    const headers = {
      Authorization: `Bearer ${this.props.route.params.access}`,
    };

    const config = {
      headers: headers,
    };

    try {
      const response = await axios.get(
        'https://academy-task-hub.onrender.com/client/api/person/me',
        config
      );

      console.log('STATUS home', response.status);

      this.setState({ clients: response.data.item_list });
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} onReady={this.conect()}>
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
