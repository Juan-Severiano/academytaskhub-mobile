import React, { Component } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Button } from 'react-native-elements'

const countries = ["Egypt", "Canada", "Australia", "Ireland"]

export default class Add extends Component {
  state = {
    textArea: '',
    date: new Date(),
    selectedDate: new Date(),
    showDatePicker: false
  }

  handleDateChange = (event, date) => {
    if (date !== undefined) {
      this.setState({ selectedDate: date })
    }
    this.setState({ showDatePicker: false })
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>Criar suas Tarefas</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput
            placeholder='Titulo da Tarefa'
            style={styles.input}
          />
          <TextInput
            placeholder='Conteudo da tarefa'
            multiline={true}
            value={this.state.text}
            numberOfLines={15}
            onChangeText={(text) => this.setState({ text })}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })} style={styles.date}>
            <View>
              <Text>Data de Entrega</Text>
              <Text>
                {moment(this.state.selectedDate).format('ddd [de] D [de] MMMM [de] YYYY [às] HH:mm')}
              </Text>
            </View>
            <Ionicons name='calendar-outline' size={20} color='#343a40' />
          </TouchableOpacity>
          {this.state.showDatePicker && (
            <DateTimePicker
              value={this.state.selectedDate}
              mode="datetime"
              display="default"
              onChange={this.handleDateChange}
            />
          )}
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            buttonStyle={styles.select}
            rowTextForSelection={(item, index) => {
              return item
            }}
            buttonTextStyle={styles.buttonTextStyle}
            renderCustomizedRow={(item, index, isSelected) => {
              return (
                <View style={[styles.dropdownRow, isSelected && styles.selectedRow]}>
                  <Text style={styles.dropdownRowText}>{item}</Text>
                </View>
              );
            }}
          />
          <TouchableOpacity onPress={this.login} style={styles.buttom}>
            <Text style={styles.buttomText}>Enviar  <Ionicons name='send' size={20} color='#fff' /></Text>
          </TouchableOpacity>
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
  txtContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  txt: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#343a40'
  },
  inputArea: {
    marginTop: 20,
    width: '80%',
  },
  input: {
    backgroundColor: '#d9d9d9',
    marginVertical: 10,
    padding: 10,
    borderRadius: 15
  },
  date: {
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    marginVertical: 10,
    padding: 10,
    borderRadius: 15
  },
  select: {
    borderRadius: 20,
    width: '100%',
    backgroundColor: '#d9d9d9'
  },
  buttonTextStyle: {
    color: '#343a40',
    fontSize: 16,
  },
  dropdownRow: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  dropdownRowText: {
    fontSize: 12,
    color: '#343a40',
  },
  selectedRow: {
    backgroundColor: '#343a40',
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#0068d9',
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
  },
})
