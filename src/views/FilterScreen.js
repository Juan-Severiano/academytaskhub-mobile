import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native'
import FilterComponent from '../components/Filter'
import { access } from '../commun'
import axios from 'axios'

import style from '../style'

export default class Filter extends Component {
  state = {
    filterSearch: '',
    filters: [],
    teachers: [],
  }

  getFilters = async () => {
    console.clear();

    const headers = {
      Authorization: `Bearer ${this.props.route.params.access}`,
    };

    const config = {
      headers: headers,
    };

    try {
      const response = await axios.get(
        'https://academy-task-hub.onrender.com/client/api/discipline/',
        config
      );

      const teachers = await axios.get(
        'https://academy-task-hub.onrender.com/client/api/teacher/',
        config
      );

      console.log('STATUS filter', response.status);

      this.setState({ filters: response.data.results });
      this.setState({ teachers: teachers.data.results });
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  add = (nome) => {
    this.setState({ filterSearch: nome })
  }
  render() {
    return (
      <View style={styles.container} onReady={this.getFilters()}>
        <View style={styles.filterArea}>
          <View style={{ height: 50 }}>
            <FilterComponent value={this.state.filterSearch} />
          </View>
          <View style={{ width: '100%', alignItems: 'flex-end' }}>
            <FilterComponent value='Pesquisar' color='#0dcaf0' search />
          </View>
        </View>
        <Text style={styles.filterBy}>Filter By</Text>
        <View style={styles.filterContainer}>
          <FlatList
            data={this.state.filters}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => {
              return <FilterComponent value={item.name} add={this.add} />
            }
            }
          />
          <FlatList
            data={this.state.teachers}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => {
              return <FilterComponent value={item.name} add={this.add} />
            }
            }
          />
        </View>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  filterContainer: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  filterBy: {
    width: '80%',
    marginBottom: 10,
    fontSize: 28,
    fontFamily: style.fontBold,
  },
  filterArea: {
    width: '80%',
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#343a40',
    marginBottom: 10
  }
})
