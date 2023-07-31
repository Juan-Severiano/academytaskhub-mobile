import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native'
import Card from '../components/Card'
import tasksObj from '../components/tasks'
import data from '../../data'
import style from '../style'

export default class HomeScreen extends Component {
  state = {
    tasks: [...tasksObj],
    clients: [],
  }

  conect = async () => {
    console.clear();
    const headers = {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwODM3NTQ5LCJpYXQiOjE2OTA4MzM5NDksImp0aSI6IjM0YzIwZDVjMTZmZjRjMTI5NmIwNjgxZDQ3ZDMwZjI3IiwidXNlcl9pZCI6M30.Vpr5875d26WeBCHX8p6C8FCzhHtDOjT4OT9YGI5bL2I'
    };
    const config = {
      method: 'GET',
      headers: headers,
    };

    const response = await fetch(
      'https://academy-task-hub.onrender.com/client/api/itemlist',
      config
    );

    const json = await response.json();

    console.log('STATUS', response.status)
    this.setState({ clients: json.results })
    console.log(this.state.clients)
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} {...this.conect()} >
        <Text style={{ fontFamily: style.fontDefault, fontSize: 30, marginTop: 20}}>
          To do
        </Text>
        <FlatList
          data={data}
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
          data={data}
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
          data={data}
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
