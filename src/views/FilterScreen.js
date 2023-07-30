import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import FilterComponent from '../components/Filter'

export default class Filter extends Component {
  state = {
    filterSearch: ''
  }

  add = (nome) => {
    this.setState({ filterSearch: nome })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filterArea}>
          <View style={{ height: 50 }}>
            <FilterComponent value={this.state.filterSearch} />
          </View>
          <View style={{ width: '100%' , alignItems: 'flex-end' }}>
            <FilterComponent value='Pesquisar' color='#0dcaf0' search />
          </View>
        </View>
        <Text style={styles.filterBy}>Filter By</Text>
        <View style={styles.filterContainer}>
          <FilterComponent value='asd' add={this.add} />
          <FilterComponent value='asd1' add={this.add} />
          <FilterComponent value='asd2' add={this.add} />
          <FilterComponent value='asd3' add={this.add} />
          <FilterComponent value='asd4' add={this.add} />
          <FilterComponent value='asd5' add={this.add} />
          <FilterComponent value='asd6' add={this.add} />
          <FilterComponent value='asd7' add={this.add} />
          <FilterComponent value='asd8' add={this.add} />
          <FilterComponent value='asd98' add={this.add} />
          <FilterComponent value='asd9' add={this.add} />
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
    fontSize: 20
  },
  filterArea: {
    width: '80%',
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#343a40',
    marginBottom: 10
  }
})
