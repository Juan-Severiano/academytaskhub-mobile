import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default class Perfil extends Component {
  logout = () => {

  }

  render() {
    const options = { email: 'sla@aluno.ce.gov.br', secure: true }
    return (
      <View style={styles.container}>
        <Ionicons name='person-circle-outline' style={styles.avatar} size={200} color='#000' />
        <Text style={styles.nickname}>Fulaninho</Text>
        <Text style={styles.email}>fulano@aluno.ce.gov.br</Text>
        <TouchableOpacity onPress={this.logout} style={styles.buttom}>
          <Text style={styles.buttomText}>Sair</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  nickname: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 10,
    fontSize: 25,
  },
  buttom: {
    marginTop: 100,
    padding: 10,
    backgroundColor: '#dc3545',
    borderRadius: 10,
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttomText: {
    fontSize: 20,
    color: '#fff'
  }
})
