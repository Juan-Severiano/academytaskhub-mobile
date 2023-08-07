import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Card from '../components/CardYT'
import tasksObj from '../components/tasks'
import FilterYT from '../components/FilterYT'
import { access } from '../commun'
import axios from 'axios'

import style from '../style'

export default class YourTasks extends Component {
  state = {
    tasks: []
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

      console.log('STATUS YT', response.status);

      this.setState({ tasks: response.data.item_list });
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
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
