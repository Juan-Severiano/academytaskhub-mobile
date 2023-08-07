import React, { Component } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Platform, ScrollView } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Button } from 'react-native-elements'
import style from '../style'
import axios from 'axios'

export default class Add extends Component {
  state = {
    text: '',
    title: '',
    date: new Date(),
    selectedDate: new Date(),
    showDatePicker: false,
    teachersData: [],
    disciplineData: [],
    stateData: [ "TODO", "DOING", "DONE" ],
    selectedTeacher: null,
    selectedDiscipline: null,
    selectedState: null,
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
        'https://academy-task-hub.onrender.com/client/api/discipline',
        config
      );

      const teachers = await axios.get(
        'https://academy-task-hub.onrender.com/client/api/teacher',
        config
      );

      console.log('STATUS ad', response.status);

      this.setState({ disciplineData: response.data.results });
      this.setState({ teachersData: teachers.data.results });
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  sendTask = async () => {
    const headers = {
      Authorization: `Bearer ${this.props.route.params.access}`,
      'Content-Type': 'application/json',
    };

    const data = {
      title: this.state.title,
      content: this.state.text,
      due_date: moment(this.state.selectedDate).format('YYYY-MM-DD'),
      status: this.state.selectedState,
      type: 'P',
      discipline: Number(this.state.selectedDiscipline.id),
      teacher: Number(this.state.selectedTeacher.id),
    };

    try {
      const response = await axios.post(
        'https://academy-task-hub.onrender.com/client/api/itemlist/',
        data,
        { headers }
      );

      console.log('STATUS addsend', response.status);
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  handleDateChange = (event, date) => {
    if (date !== undefined) {
      this.setState({ selectedDate: date })
    }
    this.setState({ showDatePicker: false })
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} onReady={this.getFilters()}>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>Criar suas Tarefas</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput
            placeholder='Titulo da Tarefa'
            style={styles.input}
            value={this.state.title}
            onChangeText={(title) => this.setState({ title })}
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
              <Text style={{ fontFamily: style.fontDefault }}>Data de Entrega</Text>
              <Text style={{ fontFamily: style.fontMedium }}>
                {moment(this.state.selectedDate).format('YYYY-MM-DD')}
              </Text>
            </View>
            <Ionicons name='calendar-outline' size={20} color='#343a40' />
          </TouchableOpacity>
          {this.state.showDatePicker && (
            <DateTimePicker
              value={this.state.selectedDate}
              mode="date"
              display="default"
              onChange={this.handleDateChange}
              style={{ fontFamily: style.fontDefault }}
            />
          )}
          <SelectDropdown
            data={this.state.teachersData}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              this.setState({ selectedTeacher: selectedItem });
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.name;
            }}
            buttonStyle={styles.select}
            rowTextForSelection={(item, index) => {
              return item.name;
            }}
            buttonTextStyle={styles.buttonTextStyle}
            renderCustomizedRow={(item, index, isSelected) => {
              return (
                <View style={[styles.dropdownRow, isSelected && styles.selectedRow]}>
                  <Text style={styles.dropdownRowText}>{item.name}</Text>
                </View>
              );
            }}
          />
          <SelectDropdown
            data={this.state.disciplineData}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              this.setState({ selectedDiscipline: selectedItem });
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.name;
            }}
            buttonStyle={styles.select}
            rowTextForSelection={(item, index) => {
              return item.name;
            }}
            buttonTextStyle={styles.buttonTextStyle}
            renderCustomizedRow={(item, index, isSelected) => {
              return (
                <View style={[styles.dropdownRow, isSelected && styles.selectedRow]}>
                  <Text style={styles.dropdownRowText}>{item.name}</Text>
                </View>
              );
            }}
          />
          <SelectDropdown
            data={this.state.stateData}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              this.setState({ selectedState: selectedItem });
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            buttonStyle={styles.select}
            rowTextForSelection={(item, index) => {
              return item;
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
          <TouchableOpacity onPress={this.sendTask} style={styles.buttom}>
            <Text style={styles.buttomText}>Enviar  <Ionicons name='send' size={20} color='#fff' /></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  txtContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  txt: {
    fontSize: 40,
    fontFamily: style.fontBold,
    color: '#343a40',
    width: '100%',
  },
  inputArea: {
    marginTop: 10,
    width: '80%',
  },
  input: {
    backgroundColor: '#d9d9d9',
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
    fontFamily: style.fontMedium
  },
  date: {
    fontSize: 20, 
    fontFamily: style.fontMedium,
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
    backgroundColor: '#d9d9d9',
    marginVertical: 5
  },
  buttonTextStyle: {
    color: '#343a40',
    fontSize: 16,
    fontFamily: style.fontDefault,
  },
  dropdownRow: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  dropdownRowText: {
    fontSize: 12,
    color: '#343a40',
    fontFamily: style.fontDefault,
  },
  selectedRow: {
    backgroundColor: '#343a40',
    borderRadius: 10,
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#0068d9',
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: style.fontDefault,
  },
})
