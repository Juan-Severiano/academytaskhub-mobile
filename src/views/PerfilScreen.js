import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import style from '../style'

export default class Perfil extends Component {
  logout = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    const options = { email: 'sla@aluno.ce.gov.br', secure: true }
    return (
      <View style={styles.container}>
        <Ionicons name='person-circle-outline' style={styles.avatar} size={200} color='#000' />
        <Text style={styles.nickname}>Francisco Juan de Sousa Severiano</Text>
        <Text style={styles.email}>francisco.severiano5@aluno.ce.gov.br</Text>
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
    fontSize: 25,
    fontFamily: style.fontDefault,
    alignItems: 'center',
  },
  email: {
    marginTop: 10,
    fontSize: 20, 
    alignItems: 'center',
    fontFamily: style.fontMedium
  },
  buttom: {
    marginTop: 100,
    padding: 10,
    backgroundColor: '#dc3545',
    borderRadius: 10,
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: style.fontDefault,
  }
})
